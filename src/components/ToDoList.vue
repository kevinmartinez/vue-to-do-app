<template>
  <main>
    <!-- The heading uses interpolation within the curly braces -->
    <header>
      <!-- Hai -->
      <h1>{{ welcome }}</h1>
    </header>
    <ol>
      <li>
        <ToDoInput
          placeholder="Add ToDo"
          v-model='newToDoContent'
          @keydown.enter='newToDoItem'
        />
      </li>
    </ol>
    <!-- Show todos if there are any -->
    <ul v-if='todos.length'>
      <!-- loop through each todo in todos,
      give them their unique id's,
      bind the value of the todo -->
      <ToDoItem
        v-for='todo in todos'
        :key='todo.id'
        :todo='todo'
        @remove="removeToDoItem"
      />
    </ul>
  </main>
</template>

<script>
import ToDoInput from './ToDoInput.vue'
import ToDoItem from './ToDoItem.vue'

// Initial new todo value
let newToDo = 1

export default {
  name: 'ToDoList',
  components: {
    ToDoInput,
    ToDoItem
  },
  data () {
    return {
      newToDoContent: '',
      // Placeholder todos array
      todos: [
        {
          id: newToDo++,
          text: 'Buy vegetables'
        },
        {
          id: newToDo++,
          text: 'Selfie on the moon'
        },
      ]
    };
  },
  props: {
    welcome: String,
  },
  // Our methods which will trigger add todos and remove todos, based on unique id's
  methods: {
    newToDoItem() {
      const text = this.newToDoContent;
      if (text) {
        this.todos.push({
          id: newToDo++,
          text: text
        });
        this.newToDoContent = ''
      }
    },
    removeToDoItem(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      })
    }
  }
}
</script>
<!-- Single file component style CSS, can be Sass, LESS etc -->
<style scoped>
  ol, ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 5px;
  }
</style>

