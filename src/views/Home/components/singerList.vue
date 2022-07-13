<script setup>
import { onMounted, ref } from "vue";
import { homeApi } from "@/api";
const list = ref([]);
onMounted(async () => {
  let { artists } = await homeApi.singerlist({ limit: 24 });
  list.value = artists;
});
</script>

<template>
  <div>
    <h3>热门歌手</h3>
    <div class="list">
      <div class="item-card" v-for="(item, index) in list" :key="index">
        <div>
          <el-image class="el-image" :src="item.picUrl" fit="cover" />
        </div>
        <p class="name center">{{ item.name }}</p>
        <p class="num center">歌曲数：{{ item.musicSize }}</p>
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
.item-card > div {
  display: flex;
}
.name {
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  word-break: break-word;
  margin-top: 10px;
}
.num {
  font-size: 12px;
  margin-top: 10px;
  color: #fa2800;
}
.center {
  text-align: center;
}
.el-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: auto;
}
</style>
