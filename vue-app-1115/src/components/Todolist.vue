<script setup>
const props = defineProps({
  todos: Array, // todos 這邊要跟父組件同名 後面放類型(array, string...)
});
</script>

<template>
  <ul class="list-group mt-3">
    <li
      v-for="(todo, index) in props.todos"
      :key="index"
      class="list-group-item"
    >
      <!-- v-for="(todo, index) in props.todos" 串接上方的東東 -->
      <!-- :key="index" 給他唯一值 -->
      <div class="d-flex justify-content-between">
        <div>
          <input class="form-check-input me-3" type="checkbox" />
          <label class="form-check-label">{{ todo.title }}</label>
        </div>
        <button class="badge bg-danger rounded-pill border-0">X</button>
      </div>
      <input type="text" class="form-control" hidden />
    </li>
  </ul>
</template>

<style scoped></style>
