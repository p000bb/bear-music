<script setup>
import { onMounted, ref } from "vue";
import { homeApi } from "@/api";
import { numTransform } from "@u/tool.js";
import { CaretRight } from "@element-plus/icons-vue";
const list = ref([]);
onMounted(async () => {
  let { result } = await homeApi.playlist({ limit: 32 });
  list.value = result;
});
</script>

<template>
  <div>
    <h3>推荐歌单</h3>
    <div class="list">
      <div class="item-card" v-for="(item, index) in list" :key="index">
        <div class="num">
          <el-icon><CaretRight /></el-icon>
          {{ numTransform(item.playCount) }}
        </div>
        <div>
          <el-image
            style="width: 100%; height: 100%"
            :src="item.picUrl"
            fit="cover"
          />
        </div>
        <div class="content">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: 10px;
}
.item-card {
  flex: 0 0 12.5%;
  max-width: 12.5%;
  padding: 0 10px 25px;
  cursor: pointer;
}
.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-weight: bold;
  line-height: 18px;
  margin-top: 10px;
  font-size: 14px;
}
.num {
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  position: absolute;
  padding-right: 3px;
  z-index: 1;
  display: flex;
  align-items: center;
}
</style>
