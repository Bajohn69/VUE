<script setup>
import { reactive, ref } from "vue";
import TodoFooter from "../components/TodoFooter.vue";
import TodoList from "../components/TodoList.vue";

const todos = reactive({
  data: [
    { id: 1, title: "Homework 1", completed: false },
    { id: 2, title: "Homework 2", completed: true },
    { id: 3, title: "Homework 3", completed: false },
  ],
});
// reactive + tab 讓他自動匯入
// 因為要放物件所以用 reactive 宣告，不用 ref

const newTodo = ref("");
// trim() 直接寫在 v-model.trim 就好

const addTodo = () => {
  if (!newTodo.value) {
    return;
  }
  // 若使用者沒輸入就按 enter 就 return
  // 在用 ref 所宣告出來變數，要取出變數的值要加入 .value 才能讀到他的值
  todos.data.push({
    id: todos.data.length + 1,
    title: newTodo.value,
    completed: false,
  });
  newTodo.value = "";
  // 清空
};
</script>

<template>
  <h3>Todo Page</h3>
  <input
    type="text"
    v-model.trim="newTodo"
    @keyup.enter="addTodo"
    class="form-control"
    autofocus
    autocomplete="off"
    placeholder="想要做甚麼?"
  />
  <!-- v-model.trim 雙向繫節 + trim -->
  <TodoList :todos="todos.data"></TodoList>
  <!-- :todos="todos.data" :todos 是自訂名稱 todos.data 是上面的 -->
  <TodoFooter></TodoFooter>
</template>

<style scoped></style>
