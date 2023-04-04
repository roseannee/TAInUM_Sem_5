<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Travel Diary</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Travel Diary</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row >
          <ion-col size="6" v-for="photo in photos" :key="photo">
            <ion-img :src="photo.webviewPath"></ion-img>
            <ion-label class="date">{{ photo.date }}</ion-label>
            <br>
            <ion-label class="title">{{ photo.title }}</ion-label>
            <br>
            <ion-label class="content">{{ photo.description }}</ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="chevronUpCircle"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button color="warning" @click="() => router.push('/tabs/tab2')">
            <ion-icon :icon="pencilOutline"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonLabel, alertController } from '@ionic/vue';
import { chevronUpCircle, pencilOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { usePhotoGallery } from '@/composables/usePhotoGallery';
import router from '@/router';

export default defineComponent({
  name: 'Tab1Page',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonLabel },
  setup() {
    const { photos } = usePhotoGallery()
    const router = useRouter()

    return {
      photos,
      chevronUpCircle, pencilOutline,
      router
    }
  }
});
</script>

<style scoped>
.date {
  color: gray;
  font-size: 12px;
}

.title {
  font-weight: bold;
  font-size: 18px;
}

.content {
  font-style: italic;
  font-size: 14px;
}
</style>