<script setup>
import { onMounted, ref } from "vue";
import { homeApi } from "@/api";
const list = ref([]);
onMounted(async () => {
  let { result } = await homeApi.radiolist();
  list.value = result;
});
</script>

<template>
  <div>
    <h3>推荐电台</h3>
    <div class="list">
      <div class="card" v-for="(item, index) in list" :key="index">
        <div class="image-card">
          <el-image class="el-image" :src="item.picUrl" fit="cover" />
        </div>
        <div style="flex: 1">
          <h2>{{ item.name }}</h2>
          <p class="description">{{ item.program.description }}</p>
          <p class="copywriter">推荐理由：{{ item.copywriter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  padding: 15px;
}
.image-card {
  width: 150px;
  height: 150px;
  margin-right: 15px;
}
.el-image {
}
h2 {
  padding-left: 10px;
  font-size: 20px;
  line-height: 32px;
}
h2::before {
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  height: 100%;
  content: "";
  border-left: 5px solid #2999fe;
}
.description {
  padding-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.copywriter {
  position: absolute;
  bottom: 0;
}
</style>
