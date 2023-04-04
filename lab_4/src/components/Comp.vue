<template>
    <div class="form-center">
        <form>
            <label>
                <slot></slot>
            </label>
            <input :type="inputType" :class="inputClass" v-model="inputText" @input="validation" />
            <button @click.prevent="clear">Clear</button>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        min: Number,
        max: Number,
        isNumber: Boolean
    },

    emits: ['change', 'error'],

    data() {
        return {
            inputText: '',
            inputClass: 'standart_input',
            inputType: 'text'
        }
    },

    methods: {
        clear() {
            this.inputText = ''
        },

        validation() {
            this.inputClass = 'standart_input'
            this.$emit('change', this.inputText)
            this.$emit('error', '')

            if (this.isNumber)
                this.validateNumber()
            else
                this.validateText()
        },

        validateNumber() {
            if (this.inputText < this.min)
                this.showError('The number is too low')
            else if (this.inputText > this.max)
                this.showError('The number is too high')
        },

        validateText() {
            if (this.inputText.length < this.min)
                this.showError('The caption is too short')
            else if (this.inputText.length > this.max)
                this.showError('The caption is too long')
        },

        showError(error) {
            this.inputClass = 'error_input'
            this.$emit('error', error)
        }
    },

    created() {
        if (this.isNumber)
            this.inputType = 'number'
        else
            this.inputType = 'text'
    }
}
</script>

<style>
.form-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    margin: 30px;
}

label {
    display: inline-block;
    width: 100px;
}

input {
    padding: 5px;
    outline: none;
    font-size: 14px;
}

.error_input {
    border: 2px solid rgb(255, 0, 0);
}

button {
    padding: 5px;
    margin-left: 20px;
    width: 70px;
    font-size: 14px;
}
</style>