<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Data entry</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Data entry</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list lines="none">
          <ion-item>
            <ion-label>Age:</ion-label>
            <ion-input type="number" placeholder="from 40 to 70" min="40" max="70" v-model="age"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Sex:</ion-label>
            <ion-select v-model="sex">
              <ion-select-option value="M" selected>Male</ion-select-option>
              <ion-select-option value="F">Female</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Smoker:</ion-label>
            <ion-checkbox v-model="smoker"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label>Blood pressure:</ion-label>
            <ion-input type="number" min="120" max="180" v-model="bp"></ion-input>
            <ion-label>mm Hg</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Cholesterol:</ion-label>
            <ion-range :ticks="true" :snaps="true" :min="0" :max="4" @ionChange="onRangeChange"
              v-model="cholesterol"></ion-range>
          </ion-item>
          <ion-item>
            <ion-label style="text-align: center;">{{ cholesterol + 4 }} mmol/l</ion-label>
            <ion-label style="text-align: center;">{{ cholesterol * 40 + 150 }} mg/dl</ion-label>
          </ion-item>
        </ion-list>

        <ion-button expand="block"
          @click="() => router.push('/result/' + age + '/' + sex + '/' + smoker + '/' + bp + '/' + cholesterol)">Calculate</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonRange } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonRange
  },
  data() {
    return {
      age: 40,
      sex: 'M',
      smoker: false,
      bp: 120,
      cholesterol: 0
    }
  },
  methods: {
    onRangeChange({ detail }: { detail: any }) {
      this.cholesterol = detail.value
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>

<style scoped>
ion-list {
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
}

ion-item {
  margin: 10px;
}

ion-input {
  text-align: right;
}

ion-button {
  margin-top: 20px;
}

ion-range {
  max-width: 60%
}

#container {
  text-align: center;
  width: 400px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
