<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button color="medium" @click="cancel">Cancel</ion-button>
                </ion-buttons>
                <ion-title>Modal</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="confirm">Confirm</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="container">
                <ion-item>
                    <ion-label position="stacked">Your name</ion-label>
                    <ion-input v-model="name" placeholder="Your name"></ion-input>
                </ion-item>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonLabel, IonButton, IonButtons, IonItem, IonInput, modalController } from '@ionic/vue';


export default defineComponent({
    name: 'SimpleModal',
    components: { IonHeader, IonToolbar, IonContent, IonPage, IonTitle, IonLabel, IonButton, IonButtons, IonItem, IonInput },
    data() {
      return {
        name: '',
      };
    },
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        return modalController.dismiss(this.name, 'confirm');
      },
    },
});
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>