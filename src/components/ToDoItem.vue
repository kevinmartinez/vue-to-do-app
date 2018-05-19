<template>
  <li>
    {{ todo.text }}
    <!-- bind an emit event to a vue click handler -->
    <!-- @click is a shorthand for v:on:click -->
    <button @click="$emit('remove', todo.id)">X</button>
  </li>
</template>

<script>
// Pass down props
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  span {
    border: 2px solid #000;
  }
</style>


