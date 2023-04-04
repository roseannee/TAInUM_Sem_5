<template>
    <div class="section">
        <Comp @error="(errorMsg) => errorFirstName = errorMsg" :min="3" :max="20" :is-number="false">

            First name:
        </Comp>

        <p>{{ errorFirstName }}</p>
    </div>

    <div class="section">
        <Comp @error="(errorMsg) => errorLastName = errorMsg" :min="3" :max="20" :is-number="false">

            Last name:
        </Comp>

        <p>{{ errorLastName }}</p>
    </div>

    <div class="section">
        <Comp @error="(errorMsg) => errorAge = errorMsg" :min="1" :max="100" :is-number="true">

            Age:
        </Comp>

        <p>{{ errorAge }}</p>
    </div>

    <div class="section">
        <Comp @error="(errorMsg) => errorWeight = errorMsg" :min="1" :max="100" :is-number="true">

            Weight:
        </Comp>

        <p>{{ errorWeight }}</p>
    </div>

    <div class="section">
        <Comp @error="(errorMsg) => errorLocation = errorMsg" :min="3" :max="20" :is-number="false">

            Location:
        </Comp>

        <p>{{ errorLocation }}</p>
    </div>
</template>

<script>
import Comp from './Comp.vue';

export default {
    components: {
        Comp
    },
    data() {
        return {
            errorFirstName: '',
            errorLastName: '',
            errorAge: '',
            errorWeight: '',
            errorLocation: ''
        }
    },

}
</script>

<style>
.section {
    height: 100px;
}

p {
    margin: 0;
    text-align: center;
}
</style>