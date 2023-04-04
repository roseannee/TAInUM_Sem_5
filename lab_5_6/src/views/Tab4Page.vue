<template>
    <ion-page>

        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Simple Modal</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="container">
                <ion-button @click="openModal">Open Modal</ion-button>
                <p>{{ message }}</p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonButton,
    modalController,
    IonButtons,
    IonMenuButton
} from '@ionic/vue';
import SimpleModal from '@/components/SimpleModal.vue';

export default defineComponent({
    name: 'Tab4Page',
    components: {
        IonHeader,
        IonToolbar,
        IonContent,
        IonPage,
        IonTitle,
        IonButton,
        IonButtons,
        IonMenuButton
    },
    data() {
        return {
            message: '',
        };
    },
    methods: {
        async openModal() {
            const modal = await modalController.create({
                component: SimpleModal,
            });
            modal.present();

            const { data, role } = await modal.onWillDismiss();

            if (role === 'confirm') {
                this.message = `Hello, ${data}!`;
            }
        }
    }
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

p {
    display: block;
}
</style>