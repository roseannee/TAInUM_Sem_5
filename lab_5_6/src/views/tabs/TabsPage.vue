<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="mapOutline" />
          <ion-label>Cards</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="earthOutline" />
          <ion-label>Slides</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet
} from '@ionic/vue';
import {
  bookmarkOutline,
  earthOutline,
  mapOutline,
  clipboardOutline
} from 'ionicons/icons';

export default defineComponent({
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet
  },
  setup() {
    return {
      bookmarkOutline,
      earthOutline,
      mapOutline,
      clipboardOutline
    }
  }
});
</script>
