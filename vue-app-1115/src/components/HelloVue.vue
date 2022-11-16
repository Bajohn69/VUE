<script setup>
import { ref } from "vue";

const msg = ref("");
// 快捷鍵 ref + tab
</script>

<template>
  <input type="text" v-model="msg" />
  <h3>Hello, {{ msg }}!</h3>
</template>

<style scoped>
h3 {
  color: lightcoral;
}
</style>
