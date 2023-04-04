<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="imagesOutline" />
          <ion-label>Diary</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="addOutline" />
          <ion-label>Add new</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { imagesOutline, addOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    const router = useRouter()
    return {
      imagesOutline, addOutline,
      router
    }
  }
});
</script>
