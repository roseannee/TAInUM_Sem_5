<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add new photo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add new photo</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list lines="none">
          <ion-item>
            <ion-img v-if="takenPhotos.length === 0" alt="Here will be your picture"></ion-img>
            <ion-img v-else :src="takenPhotos[0].webPath" style="border: none;"></ion-img>
          </ion-item>
          <ion-item>
            <ion-input placeholder="Enter a photo name" v-model="title" class="name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-textarea placeholder="Enter a photo description" v-model="description"></ion-textarea>
          </ion-item>
          <ion-button expand="block" @click="saveToDiary()">Save to Travel Diary</ion-button>
        </ion-list>
      </div>

      <ion-fab slot="fixed" vertical="bottom" horizontal="center">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonList, IonItem, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

export default defineComponent({
  name: 'Tab2Page',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonList, IonItem, IonInput, IonTextarea, IonButton },
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    async saveToDiary(): Promise<void> {
      await this.savePicture(this.takenPhotos[0], this.title, this.description)
      window.location.href = '/tabs/tab1'
    }
  },
  setup() {
    const { takenPhotos, takePhoto, savePicture } = usePhotoGallery()

    return {
      takenPhotos, takePhoto, savePicture,
      camera
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

ion-img {
  border: 1px solid royalblue;
  height: 150px;
  width: 300px;
}

.name {
  font-size: 20px;
  font-weight: bold;
}

ion-button {
  margin-top: 20px;
}
</style>
