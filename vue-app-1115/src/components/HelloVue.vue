<script setup>
import { ref } from "vue";

const msg = ref("Vue");
// 快捷鍵 ref + tab
// ref 預設長怎樣
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
