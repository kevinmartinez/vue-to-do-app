<!-- The vue data bindings and attributes can use shorthand declarations,
like :value, is a shorthand for v-bind:value
 -->
<template>
    <input
      type="text"
      name="todo"
      class="input"
      :value="value"
      v-on="listeners"
    >
</template>
<script>
export default {
  name: 'ToDoInput',
  props: {
    value: {
      type: String, // A way to type check in Vue
      default: '',
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => {
          return this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>
