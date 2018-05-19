<!-- Main app file, we import our todo list -->
<template>
  <div id="app">
    <ToDoList welcome="Vue ToDo"/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'app',
  components: {
    ToDoList
  }
}
</script>
