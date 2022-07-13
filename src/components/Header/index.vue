<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { ref } from "vue";
const active = ref("");
const activeClass = (tip) => {
  return active.value === tip ? "active" : "";
};
const emits = defineEmits(["toPath"]);
const route = new useRoute();
onMounted(() => {
  let name = "";
  switch (route.name) {
    case "home":
      name = "home";
      break;
    case "rank":
      name = "rank";
      break;
  }
  console.log(name)
  active.value = name;
});
// 路由跳转
const go = (path) => {
  active.value = path;
  emits("toPath", path);
};
</script>

<template>
  <div class="header">
    <div class="main flex-row">
      <div class="logo">
        <span>小熊音乐</span>
      </div>
      <ul class="nav flex-row">
        <li :class="activeClass('home')" @click="go('home')">首页</li>
        <li :class="activeClass('rank')" @click="go('rank')">排行榜</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 64px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.flex-row {
  display: flex;
  align-items: center;
}
.main {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
}
.logo {
  width: 200px;
  display: block;
  height: 64px;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: 100px;
  background-image: url(@/assets/logo.jpg);
  display: flex;
}
.logo > span {
  font-weight: bold;
  padding-left: 20px;
  margin: auto;
}
.nav {
  flex: 1;
}

.nav li {
  font-size: 14px;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
}

.nav li:hover {
  color: red;
}

.nav .active {
  color: red;
}
</style>
