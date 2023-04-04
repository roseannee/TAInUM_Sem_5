import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';

export interface UserPhoto {
  title: string;
  description: string;
  date: string;
  filepath: string;
  webviewPath?: string;
}

const photos = ref<UserPhoto[]>([]);
const takenPhotos = ref<Photo[]>([]);

export const usePhotoGallery = () => {
  const PHOTO_STORAGE = 'photos';

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  watch(photos, cachePhotos);

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    if (!isPlatform('hybrid')) {
      for (const photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });

        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
    }

    photos.value = photosInPreferences;
  };

  onMounted(loadSaved);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    takenPhotos.value = [photo, ...takenPhotos.value];
  };

  const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  const savePicture = async (photo: Photo, title: string, description: string): Promise<UserPhoto> => {
    const fileName = PHOTO_STORAGE + '_' + new Date().getTime() + '.jpeg'

    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    const photoObj: UserPhoto = {
      title: title,
      description: description,
      date: new Date().toLocaleDateString(),
      filepath: fileName,
      webviewPath: photo.webPath
    }

    photos.value = [photoObj, ...photos.value];

    return photoObj
  };

  return {
    photos, takenPhotos, takePhoto, savePicture
  };
}