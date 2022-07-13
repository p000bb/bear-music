<script setup>
import { numTransform } from "@u/tool.js";
import { CaretRight } from "@element-plus/icons-vue";
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="rank-card">
    <div class="header">
      <h3>{{ props.data.name }}</h3>
      <p>{{ props.data.updateFrequency }}</p>
    </div>
    <div class="main">
      <div class="num">
        <el-icon><CaretRight /></el-icon>
        {{ numTransform(props.data.playCount) }}
      </div>
      <div class="img">
        <el-image class="el-image" :src="props.data.coverImgUrl" fit="cover" />
      </div>
      <div class="list">
        <div v-for="(item, index) in props.data.tracks" :key="index">
          <div>
            <span class="bold index">{{ index + 1 }}</span>
            <span class="bold">{{ item.first }}</span>
            <span> - </span>
            <span>{{ item.second }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.rank-card {
  padding: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-weight: bolder;
    }
    p {
      font-size: 12px;
      color: darkgray;
    }
  }
  .main {
    padding-top: 10px;
    display: flex;
    .num {
      background: rgba(0, 0, 0, 0.3);
      color: #ffffff;
      position: absolute;
      padding-right: 3px;
      z-index: 1;
      display: flex;
      align-items: center;
    }
    .img {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
    .list {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .bold {
        font-weight: bold;
      }
      .index {
        padding: 0 10px;
      }
    }
  }
}
</style>
