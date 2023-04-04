<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tourist Attractions in Poland</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tourist Attractions in Poland</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <CardComponent class="card" title="Warszaw" subtitle="Old Town" image-path="/assets/images/warszaw.jpg" />
          </ion-col>
          <ion-col>
            <CardComponent class="card" title="Gdańsk" subtitle="Brama Żuraw" image-path="/assets/images/gdansk.jpg" />
          </ion-col>
          <ion-col>
            <CardComponent class="card" title="Zakopane" subtitle="Tatra Mountains"
              image-path="/assets/images/zakopane.jpeg" />
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <CardComponent class="card" title="Szczecin" subtitle="Philharmonic"
              image-path="/assets/images/szczecin.jpg" />
          </ion-col>
          <ion-col>
            <CardComponent class="card" title="Poznań" subtitle="Town Hall" image-path="/assets/images/poznan.jpg" />
          </ion-col>
          <ion-col>
            <CardComponent class="card" title="Sopot" subtitle="Krzywy Domek" image-path="/assets/images/sopot.jpg" />
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton
} from '@ionic/vue';
import CardComponent from '@/components/CardComponent.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    CardComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonMenuButton
  }
});
</script>

<style scoped>
.card {
  text-align: center;
}
</style>