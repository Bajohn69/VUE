<script setup>
import { computed } from "@vue/reactivity";
import { reactive, ref, watch } from "vue";
import TodoFooter from "../components/TodoFooter.vue";
import TodoList from "../components/TodoList.vue";

// const todos = reactive({
//   data: [
//     { id: 1, title: "Homework 1", completed: false },
//     { id: 2, title: "Homework 2", completed: true },
//     { id: 3, title: "Homework 3", completed: false },
//   ],
// });
// reactive + tab 讓他自動匯入
// 因為要放物件所以用 reactive 宣告，不用 ref

const newTodo = ref("");
// trim() 直接寫在 v-model.trim 就好

// 從 localStorage 中讀出資料
const todos = reactive({
  data: JSON.parse(localStorage.getItem("todos") || "[]"),
});

const addTodo = () => {
  if (!newTodo.value) {
    return;
  }
  // 若使用者沒輸入就按 enter 就 return
  // 在用 ref 所宣告出來變數，要取出變數的值要加入 .value 才能讀到他的值
  let id = 1;
  if (todos.data.length > 0) {
    id = todos.data[todos.data.length - 1].id + 1;
  }
  todos.data.push({
    id: id, //todos.data.length + 1,
    title: newTodo.value,
    completed: false,
  });
  newTodo.value = "";
  // 清空
  // console.log(id);
};

// 從子組件傳遞要刪除的 todo 到父組件
const removeTodo = (todo) => {
  const index = todos.data.indexOf(todo); // 1.找到要刪除 todos 的 index
  todos.data.splice(index, 1); // 2.刪除一筆資料
};

// 將資料儲存到 localStorage 中
watch(
  todos,
  (newTodos, oldTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos.data));
  },
  { deep: true }
);
// watch 監看資料有沒有被改變(watch 是 vue 內建所以要 import)
// 如果沒加 deep 就只會 watch 到 todos 的物件有沒有被變成陣列或字串
//   { deep: true } 才會看到物件的 data 屬性的陣列有沒有被修改

const remaining = computed(() => {
  let activeTodos = todos.data.filter((todo) => !todo.completed);
  // 把沒有打勾的資料放到前面的陣列
  return activeTodos.length;
  // 計算還沒有被打勾的有幾個
});
// computed 是 vue 的計算屬性，跟 watch 有點像，時時監控 todos 的 data 有沒有改變，有改變就會重新執行 computed 裡面的程式，再回傳 computed 的結果(所以一定會回傳結果)

// 從子組件傳遞要刪除的 todo 到父組件
// 移除所有完成工作
const removeComplete = (todo) => {
  // 因為 index 的關係要從最後一筆開始刪除(從前面開始刪就會有重複ㄉ index)
  // let i = todos.data.length - 1 因為 index 是 length - 1
  for (let i = todos.data.length - 1; i >= 0; i--) {
    if (todos.data[i].completed) {
      todos.data.splice(i, 1);
    }
  }
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
  <TodoList :todos="todos.data" @removeTodo="removeTodo"></TodoList>
  <!-- :todos="todos.data" :todos 是自訂名稱，todos.data 是上面的變數 -->
  <!-- @removeTodo="removeTodo" @removeTodo 自訂名稱，要跟子組接傳遞資料 ，"removeTodo" 是方法(上面)-->
  <TodoFooter
    :remaining="remaining"
    @removeComplete="removeComplete"
  ></TodoFooter>
  <!-- :remaining="remaining" 父傳子 -->
  <!-- @removeComplete="removeComplete" 子傳父 -->
</template>

<style scoped></style>
