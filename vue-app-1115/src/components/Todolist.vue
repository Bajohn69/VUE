<script setup>
import { ref } from "vue";

const props = defineProps({
  todos: Array, // todos 這邊要跟父組件同名 後面放類型(array, string...)
});

const emit = defineEmits(["removeTodo"]);
const handleRemove = (todo) => {
  emit("removeTodo", todo);
  // 第一個參數引發父組件的 remove 事件
  // 第二個參數是要傳遞到 removeTodo 事件發生要執行的方法的資料
};
// const emit = defineEmits(['removeTodo', 'editTodo'])
// 多重事件可用陣列宣告

const editedTodo = ref(null);
const beforeEditCache = ref("");

const editTodo = (todo) => {
  editedTodo.value = todo;
  // 因為是 ref 所以要記得加 .value
  beforeEditCache.value = todo.title;
};

const doneEdit = (todo) => {
  todo.title = todo.title.trim();
  editedTodo.value = null;
};

const cancelEdit = (todo) => {
  todo.title = beforeEditCache.value;
  editedTodo.value = null;
};
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
            >{{ todo.id }} - {{ todo.title }}</label
          >
        </div>
        <button
          @click="handleRemove(todo)"
          class="badge bg-danger rounded-pill border-0"
        >
          X
        </button>
      </div>
      <input
        v-else
        v-model="todo.title"
        type="text"
        class="form-control"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.escape="cancelEdit(todo)"
      />
    </li>
  </ul>
</template>

<style scoped>
.completed {
  color: #949494;
  text-decoration: line-through;
}

button {
  cursor: pointer;
}
</style>
