<script setup>
import HelloVue from "@/components/HelloVue.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Todo from "@/views/Todo.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav></Nav>
  <div class="row">
    <div class="col-3">
      <HelloVue></HelloVue>
    </div>
    <div class="col-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
