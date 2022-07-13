<script setup>
import { numTransform } from "@u/tool.js";
import { CaretRight } from "@element-plus/icons-vue";
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="main">
    <div class="num">
      <el-icon><CaretRight /></el-icon>
      {{ numTransform(props.data.playCount) }}
    </div>
    <div>
      <el-image :src="props.data.coverImgUrl" fit="cover" class="img" />
    </div>
    <div class="content">
      {{ props.data.name }}
    </div>
  </div>
</template>
<style lang="less" scoped>
.main {
  padding: 10px;
  .num {
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    position: absolute;
    padding-right: 3px;
    z-index: 1;
    display: flex;
    align-items: center;
  }
  .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight: bold;
    line-height: 18px;
    margin-top: 5px;
    font-size: 14px;
    width: 100px;
  }
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
