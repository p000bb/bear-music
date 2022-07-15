<script setup>
import { onMounted, ref } from "vue";
import { rankApi } from "@/api";
import { useRoute } from "vue-router";

const route = new useRoute();
const id = ref("");
const playlist = ref({});
const privileges = ref([]);
const songs = ref([]);
onMounted(async () => {
  id.value = route.query.id;
  let {
    playlist: { trackIds },
  } = await rankApi.playListDetail({
    id: id.value,
  });
  let { songs, privileges } = await rankApi.songDetail({
    ids: trackIds.map((item) => item.id).join(","),
  });
  playlist.value = playlist;
  privileges.value = privileges;
  songs.value = songs;
});
</script>

<template>
  <div></div>
</template>
<style scoped>
</style>
