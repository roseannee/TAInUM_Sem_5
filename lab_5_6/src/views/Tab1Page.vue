<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>To-do list</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">To-do list</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button fill="outline" @click="hideCompleted = !hideCompleted" class="ifCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </ion-button>

      <ion-list lines="full">
        <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
          <ion-item :key="todo.id" v-for="todo in   filteredTodos">
            <ion-checkbox slot="start" v-model="todo.done"></ion-checkbox>
            <ion-label :class="{ done: todo.done }">{{ todo.text }}</ion-label>
            <ion-button fill="clear" @click="removeTodo(todo)">Delete</ion-button>
            <ion-reorder slot="end"></ion-reorder>
          </ion-item>
        </ion-reorder-group>
      </ion-list>

    </ion-content>
    
    <ion-footer>
      <ion-toolbar>
        <ion-input placeholder="Enter Item" v-model="newTodo"></ion-input>
        <ion-button slot="end" @click="addTodo" class="addNewTodo">Add</ion-button>
      </ion-toolbar>
    </ion-footer>
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
  IonList,
  IonItem,
  IonLabel,
  IonFooter,
  IonInput,
  IonButton,
  IonCheckbox,
  IonReorder,
  IonReorderGroup,
  IonButtons,
  IonMenuButton
} from '@ionic/vue';

let id = 0

export default defineComponent({
  name: 'Tab1Page',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonFooter,
    IonInput,
    IonButton,
    IonCheckbox,
    IonReorder,
    IonReorderGroup,
    IonButtons,
    IonMenuButton
  },
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'Task 1', done: false },
        { id: id++, text: 'Task 2', done: false },
        { id: id++, text: 'Task 3', done: false }
      ]
    }
  },
  setup() {
    const handleReorder = (event: CustomEvent) => {
      console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
      event.detail.complete();
    }

    return { handleReorder }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo == '') {
        return
      }
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo: { id: number; text: string; done: boolean; }) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
});
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

.ifCompleted {
  margin: 10px 10px 0px 10px;
}

.addNewTodo {
  margin-right: 10px;
}
</style>