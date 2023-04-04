<template>
    <ion-card>
        <img :src="imagePath" />
        <ion-card-header>
            <ion-card-title>{{ title }}</ion-card-title>
            <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            {{ content }}
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardComponent',
    components: { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent },
    props: {
        title: String,
        subtitle: String,
        imagePath: String,
        content: String
    }
});
</script>