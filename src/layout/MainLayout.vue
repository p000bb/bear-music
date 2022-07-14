<script setup>
import Header from "@c/Header/index.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toPath = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="common-layout">
    <Header @toPath="toPath" />
    <el-scrollbar>
      <div class="main">
        <router-view> </router-view>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100vh;
}
.main {
  padding-top: 70px;
  max-width: 1300px;
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
}
:deep(.el-scrollbar__bar) {
  z-index: 99999;
}
</style>
