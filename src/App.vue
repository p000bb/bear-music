<script setup>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";
const route = new useRoute();
const layout = computed(() => {
  return route.meta.title === "登录" ? "DefaultLayout" : "MainLayout";
});
onBeforeMount(() => {});
</script>

<template>
  <component :is="layout">
    <router-view> </router-view>
  </component>
</template>

<style>
@import "@/assets/base.css";
* {
  margin: 0;
}
#app {
  font-weight: normal;
}
li,
ol,
ul {
  list-style: none;
}
</style>
