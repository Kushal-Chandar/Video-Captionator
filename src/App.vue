<script setup lang="ts">
import VideoPlayer from "./components/VideoPlayer.vue";
import Captions from "./components/Captions.vue";
import Introduction from "./components/Introduction.vue";
</script>

<template>
  <Introduction />
  <div class="player-container">
    <Captions />
    <VideoPlayer />
  </div>
</template>

<style scoped>
.player-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
