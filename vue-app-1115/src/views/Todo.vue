<script setup></script>

<template>
  <h3>Todo Page</h3>
  <input
    type="text"
    v-model="newTodo"
    @keyup.enter="addTodo"
    class="form-control"
    autofocus
    autocomplete="off"
    placeholder="想要做甚麼?"
  />
</template>

<style scoped></style>
