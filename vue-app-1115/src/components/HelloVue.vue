<script setup>
import { ref } from "vue";

const msg = ref("Vue");
// 快捷鍵 ref + tab
// ref 預設長怎樣
</script>

<template>
  <input class="mt-5" type="text" v-model="msg" />
  <h1>Hello, {{ msg }}!</h1>
</template>

<style scoped>
h1 {
  color: lightcoral;
}
input {
}
</style>
