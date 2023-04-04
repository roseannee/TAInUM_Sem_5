<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Result for {{ age }} y.o.</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Result for {{ age }} y.o.</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">
                <div class="result">10-year cardiovascular risk score: <b>{{ getResult() }}%</b></div>

                <ion-grid>
                    <ion-row v-for="i in 4" :key="i">
                        <ion-col>{{ tableBP[i - 1] }}</ion-col>

                        <ion-col v-for="j in getTable()[i - 1]" :key="j">
                            <span v-if="j < 1" class="class0">{{ j }}</span>
                            <span v-else-if="j == 1" class="class1">{{ j }}</span>
                            <span v-else-if="j == 2" class="class2">{{ j }}</span>
                            <span v-else-if="j == 3 || j == 4" class="class3-4">{{ j }}</span>
                            <span v-else-if="j >= 5 && j <= 9" class="class5-9">{{ j }}</span>
                            <span v-else-if="j >= 10 && j <= 14" class="class10-14">{{ j }}</span>
                            <span v-else class="class15">{{ j }}</span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>mmol_l</ion-col>
                        <ion-col v-for="i in 5" :key="i">{{ table_mmol_l[i - 1] }}</ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>mg_dl</ion-col>
                        <ion-col v-for="i in 5" :key="i">{{ table_mg_dl[i - 1] }}</ion-col>
                    </ion-row>
                </ion-grid>

                <ion-button expand="block" router-link="/" router-direction="back">Back</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'ResultPage',
    components: {
        IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol
    },
    data() {
        return {
            resultTable: [[0, 0, 0, 0, 0]],

            tableBP: [120, 140, 160, 180],
            table_mmol_l: [4, 5, 6, 7, 8],
            table_mg_dl: [150, 190, 230, 270, 310],

            m40: [[1, 1, 1, 1, 1],
            [1, 1, 1, 2, 2],
            [1, 2, 2, 2, 3],
            [2, 2, 3, 3, 4]],
            m40s: [[1, 1, 2, 2, 3],
            [2, 2, 3, 3, 4],
            [3, 3, 4, 4, 5],
            [4, 4, 5, 6, 8]],

            m50: [[2, 2, 2, 3, 3],
            [2, 3, 3, 4, 5],
            [3, 4, 5, 6, 7],
            [5, 6, 7, 8, 9]],
            m50s: [[3, 4, 5, 5, 6],
            [5, 5, 6, 8, 9],
            [6, 8, 9, 11, 13],
            [9, 11, 13, 16, 18]],

            m55: [[2, 3, 3, 4, 5],
            [3, 4, 5, 6, 7],
            [5, 6, 7, 8, 10],
            [7, 8, 10, 12, 14]],
            m55s: [[5, 6, 7, 8, 10],
            [7, 8, 10, 12, 14],
            [10, 12, 14, 17, 20],
            [14, 17, 20, 23, 27]],

            m60: [[4, 4, 5, 6, 8],
            [5, 6, 8, 9, 11],
            [8, 9, 11, 13, 15],
            [11, 13, 15, 18, 21]],
            m60s: [[7, 9, 11, 13, 15],
            [11, 13, 15, 18, 21],
            [15, 18, 21, 25, 29],
            [21, 25, 29, 34, 39]],

            m65: [[6, 7, 9, 10, 12],
            [9, 10, 12, 14, 17],
            [12, 14, 17, 20, 24],
            [17, 20, 24, 28, 32]],
            m65s: [[12, 14, 17, 20, 23],
            [17, 20, 23, 27, 32],
            [23, 27, 32, 37, 43],
            [32, 37, 43, 49, 55]],

            m70: [[10, 12, 14, 17, 20],
            [14, 17, 20, 24, 28],
            [20, 24, 28, 32, 38],
            [28, 33, 38, 43, 50]],
            m70s: [[20, 23, 27, 32, 37],
            [27, 32, 37, 43, 49],
            [37, 43, 49, 55, 62],
            [49, 56, 62, 69, 76]],

            f40: [[0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1]],
            f40s: [[0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 2, 2],
            [1, 2, 2, 2, 3]],

            f50: [[1, 1, 1, 1, 1],
            [1, 1, 1, 1, 2],
            [1, 1, 2, 2, 2],
            [2, 2, 2, 3, 3]],
            f50s: [[1, 1, 2, 2, 2],
            [2, 2, 2, 3, 3],
            [2, 3, 3, 4, 5],
            [3, 4, 5, 5, 7]],

            f55: [[1, 1, 1, 1, 2],
            [1, 1, 2, 2, 3],
            [2, 2, 3, 3, 4],
            [3, 3, 4, 4, 5]],
            f55s: [[2, 2, 3, 3, 4],
            [3, 3, 4, 4, 5],
            [4, 4, 5, 6, 7],
            [5, 6, 8, 9, 11]],

            f60: [[2, 2, 2, 3, 3],
            [2, 3, 3, 4, 5],
            [3, 4, 5, 5, 7],
            [5, 6, 7, 8, 9]],
            f60s: [[3, 4, 4, 5, 6],
            [5, 5, 6, 8, 9],
            [6, 8, 9, 11, 13],
            [9, 11, 13, 15, 18]],

            f65: [[3, 3, 4, 5, 6],
            [4, 5, 6, 7, 9],
            [6, 7, 9, 10, 12],
            [9, 10, 12, 15, 17]],
            f65s: [[6, 7, 8, 10, 12],
            [8, 10, 12, 14, 17],
            [12, 14, 17, 20, 23],
            [17, 20, 24, 28, 32]],

            f70: [[6, 7, 8, 10, 12],
            [8, 10, 12, 14, 17],
            [12, 14, 17, 20, 24],
            [17, 20, 24, 28, 32]],
            f70s: [[12, 14, 17, 20, 23],
            [17, 20, 23, 27, 32],
            [23, 27, 32, 37, 42],
            [32, 37, 43, 49, 55]]
        }
    },
    methods: {
        getTable() {
            this.age = this.age.toString()
            const searchAge = parseInt(this.age) - parseInt(this.age) % 5

            if (this.sex == 'M') {
                if (searchAge == 40 && this.smoker == 'false')
                    return this.resultTable = this.m40
                else if (searchAge == 40 && this.smoker == 'true')
                    return this.resultTable = this.m40s

                if (searchAge <= 50 && this.smoker == 'false')
                    return this.resultTable = this.m50
                else if (searchAge <= 50 && this.smoker == 'true')
                    return this.resultTable = this.m50s

                if (searchAge == 55 && this.smoker == 'false')
                    return this.resultTable = this.m55
                else if (searchAge == 55 && this.smoker == 'true')
                    return this.resultTable = this.m55s

                if (searchAge == 60 && this.smoker == 'false')
                    return this.resultTable = this.m60
                else if (searchAge == 60 && this.smoker == 'true')
                    return this.resultTable = this.m60s

                if (searchAge == 65 && this.smoker == 'false')
                    return this.resultTable = this.m65
                else if (searchAge == 65 && this.smoker == 'true')
                    return this.resultTable = this.m65s

                if (searchAge == 70 && this.smoker == 'false')
                    return this.resultTable = this.m70
                else if (searchAge == 70 && this.smoker == 'true')
                    return this.resultTable = this.m70s
            } else {
                if (searchAge == 40 && this.smoker == 'false')
                    return this.resultTable = this.f40
                else if (searchAge == 40 && this.smoker == 'true')
                    return this.resultTable = this.f40s

                if (searchAge <= 50 && this.smoker == 'false')
                    return this.resultTable = this.f50
                else if (searchAge <= 50 && this.smoker == 'true')
                    return this.resultTable = this.f50s

                if (searchAge == 55 && this.smoker == 'false')
                    return this.resultTable = this.f55
                else if (searchAge == 55 && this.smoker == 'true')
                    return this.resultTable = this.f55s

                if (searchAge == 60 && this.smoker == 'false')
                    return this.resultTable = this.f60
                else if (searchAge == 60 && this.smoker == 'true')
                    return this.resultTable = this.f60s

                if (searchAge == 65 && this.smoker == 'false')
                    return this.resultTable = this.f65
                else if (searchAge == 65 && this.smoker == 'true')
                    return this.resultTable = this.f65s

                if (searchAge == 70 && this.smoker == 'false')
                    return this.resultTable = this.f70
                else if (searchAge == 70 && this.smoker == 'true')
                    return this.resultTable = this.f70s
            }

            return this.resultTable = this.m40
        },
        getResult() {
            let bpRes = 0

            if (parseInt(this.bp.toString()) <= 120) bpRes = 0

            if (parseInt(this.bp.toString()) <= 140 && parseInt(this.bp.toString()) > 120) bpRes = 1

            if (parseInt(this.bp.toString()) <= 160 && parseInt(this.bp.toString()) > 140) bpRes = 2

            if (parseInt(this.bp.toString()) > 160) bpRes = 3

            return this.getTable()[bpRes][parseInt(this.cholesterol.toString())]
        },
        getClassName(j: string | number) {
            return 'class' + j;
        },
    },
    setup() {
        const route = useRoute();
        const { age, sex, smoker, bp, cholesterol } = route.params;
        return { age, sex, smoker, bp, cholesterol };
    },
});
</script>

<style scoped>
span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: auto;
}

.class0 {
    background-color: green;
}

.class1 {
    background-color: greenyellow;
}

.class2 {
    background-color: yellow;
}

.class3-4 {
    background-color: orange;
}

.class5-9 {
    background-color: orangered;
    color: white;
}

.class10-14 {
    background-color: red;
    color: white;
}

.class15 {
    background-color: darkred;
    color: white;
}

ion-grid {
    width: 500px;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
}

ion-row {
    height: 50px;
    align-items: center;
}

ion-button {
    margin-top: 20px;
}

.result {
    margin-bottom: 20px;
}

iob-label {
    display: block;
}

#container {
    text-align: center;

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