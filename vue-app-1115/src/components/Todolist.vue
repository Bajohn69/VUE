<script setup></script>

<template>
  <ul class="list-group mt-3">
    <li v-for="(todo, i) in todos" class="list-group-item" :key="i">
      <div v-if="editedTodo !== todo" class="d-flex justify-content-between">
        <div>
          <input
            v-model="todo.completed"
            class="form-check-input me-3"
            type="checkbox"
          />
          <label
            @dblclick="editTodo(todo)"
            :class="{ completed: todo.completed }"
            class="form-check-label"
            >{{ i }} - {{ todo.title }}</label
          >
          <!-- class 一定要放 key: value 放多個一定要大括號， true/false 開關 class {class1: true, class2:false} -->
        </div>
        <button
          @click="removeTodo(i)"
          class="badge bg-danger rounded-pill border-0"
        >
          X
        </button>
      </div>
      <input
        v-else
        v-model="todo.title"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.escape="cancelEdit(todo)"
        type="text"
        class="form-control"
      />
    </li>
  </ul>
</template>

<style scoped></style>
