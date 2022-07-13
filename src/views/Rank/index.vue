<script setup>
import rankCard from "./components/rankCard.vue";
import imgCard from "./components/imgCard.vue";
import { onMounted, ref } from "vue";
import { rankApi } from "@/api";
const rankList = ref([]);
const imgList = ref([]);
onMounted(async () => {
  let { list } = await rankApi.toplist();
  rankList.value = list.filter((item) => item.tracks.length);
  imgList.value = list.filter((item) => !item.tracks.length);
});
</script>

<template>
  <div>
    <div class="flex-warp">
      <div v-for="(item, index) in rankList" :key="index" class="rankCard">
        <rankCard :data="item" />
      </div>
    </div>
    <div class="flex-warp">
      <div v-for="(item, index) in imgList" :key="index" class="imgCard">
        <imgCard :data="item" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.flex-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.rankCard {
  width: 50%;
  justify-content: space-around;
}
.imgCard {
  flex: 0 0 12.5%;
  max-width: 12.5%;
  cursor: pointer;
}
</style>
