<template>
  <div class="body">
    <div class="container">
      <div class="calculator">
          <input @keyup.enter="calculate" class="calculator__display" type="text" v-model="result" placeholder="0">
        <div class="calculator__keys">
          <button @click="input(op.op)" :class="operatorsClass" v-for="op in operators" :key="op.id">{{op.op}}</button>
          <button @click="input(num.num)" :class="numbersClass" v-for="num in numbers" :key="num.id">{{num.num}}</button>
          <button @click="clear" :class="clearClass" v-if="isClearButton">C</button>
          <button @click="resetSymbol" :class="clearClass" v-else>&larr;</button>
          <button @click="calculate" :class="equalsClass">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      numbers: [
        {id: 1, num: 6},
        {id: 2, num: 7},
        {id: 3, num: 8},
        {id: 4, num: 9},
        {id: 5, num: 2},
        {id: 6, num: 3},
        {id: 7, num: 4},
        {id: 8, num: 5},
        {id: 9, num: 1},
        {id: 10, num: 0}
      ],
      operators: [
        {id: 1, op: '+'},
        {id: 2, op: '-'},
        {id: 3, op: '*'},
        {id: 4, op: '/'}
      ],

      isClearButton: true,

      operatorsClass: 'operators',
      numbersClass: 'numbers',
      equalsClass: 'equals',
      clearClass: 'clear'
    }
  },
  methods: {
    clear() {
      this.result = ''
      this.isClearButton = true
    },
    resetSymbol() {
      this.result = this.result.substr(-this.result.length, this.result.length-1);

      if (this.result === '')
        this.isClearButton = true
    },
    input(char) {
      this.result = this.result.toString();
      this.result += char;
      
      this.isClearButton = false
    },
    calculate() {
      this.result = eval(this.result);

      this.isClearButton = true
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  transition: all 0.5s ease;
  overflow: hidden;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
  background: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);
}

a {
  text-decoration: none;
  color: white;
}

.container {
  height: 100vh;
  width: 100vh;
  display: grid;
  place-items: center;
}

.calculator {
  position: relative;
  height: auto;
  width: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.3);
}

.calculator__display {
  margin: 0 10px 30px;
  height: 100px;
  width: 16.25rem;
  font-size: 30px;
  text-align: right;
  padding: 0.75rem 1rem;
  border: none;
}

.calculator__keys {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(4, auto);
}

.calculator__keys > button {
  height: 60px;
  width: 60px;
  border: 0;
  border-radius: 30px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: all 200ms ease;
}

button:hover {
  transform: scale(1.1);
}

/* theme */

.calculator {
  background-color: #fff;
}

.calculator__display {
    color: #0a1e23;
}

.calculator .clear {
    background-color: #ffd5d8;
    color: #fc4552;
}

.calculator .numbers {
  background-color: #c3eaff;
  color: #000000;
}

.calculator .operators {
  background-color: #ffd0fb;
  color: #f967f3;
}

.calculator button.equals {
    background-color: #adf9e7;
    color: #000;
}
</style>
