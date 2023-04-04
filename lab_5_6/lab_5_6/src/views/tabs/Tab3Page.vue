<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Adventurous Tours in the World</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Adventurous Tours in the World</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-slides pager="true" :options="slideOpts">

        <ion-slide>
          <img src="/assets/images/cappadocia.jpg" />
          <ExploreContainer class="eContainer" name="Hot Air Balloon Cappadocia, Turkey"
            content="Cappadocia is an amazing and spectacular landscape that has been sculpted by erosion over thousands of years. These cave like dwellings and rock-hewn sanctuaries date back to the Byzantine post-Iconoclastic period, as far back as 4th Century. Today what is left are these amazing troglodyte villages, underground cities that once contained human habitat and beautiful valleys that go for as far as the eye can see." />
        </ion-slide>

        <ion-slide>
          <img src="/assets/images/iceland.jpg" />
          <ExploreContainer class="eContainer" name="Hot Spring Bath in Blue Lagoon, Iceland"
            content="Iceland's landscape is characterized by contrasts. The island sits on one of the Earth's 'hot spots,' resulting in a lot of geothermal activity. Additionally, because of its location near the Arctic, there are a wealth of glaciers across the country. That is why it's sometimes called the Land of Ice and Fire." />
        </ion-slide>

        <ion-slide>
          <img src="/assets/images/finland.jpg" />
          <ExploreContainer class="eContainer" name="Northern Lights from Glass Igloo, Finland"
            content="Enjoy stylish nights under the Northern Lights at this new addition to Finland's burgeoning glass-igloo scene. Perched on the shores of Lake Ranuanjärvi, right on the Arctic Circle, each of its glass-domed rooms offers cosy beds, cosseting fur throws, a private sauna, en-suite bathroom and even a small kitchenette." />
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSlides,
  IonSlide,
  IonButtons,
  IonMenuButton
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    ExploreContainer,
    IonButtons,
    IonMenuButton
  },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>

<style scoped>
ion-slides {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
}

.eContainer {
  padding: 20px;
}

img {
  margin-left: 5px;
  width: 50%;
}
</style>