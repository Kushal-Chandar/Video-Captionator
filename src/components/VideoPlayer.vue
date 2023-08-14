<script setup lang="ts">
import { ref } from "vue";
import captionsURL from "./captionsURLState";
import fileName from "./fileNameState";

let width = Math.min(720, screen.width - 20);

const videoObjectURL = ref("");
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    fileName.setValue(file.name.split(".")[0]);
    videoObjectURL.value = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div class="video-player">
    <video :src="videoObjectURL" controls :width="width" autoplay>
      <track
        v-if="captionsURL"
        :src="captionsURL.value"
        kind="subtitles"
        srclang="en"
        label="English"
        default
      />
    </video>
    <div class="video-input">
      <label for="video-input">Upload your video here:</label>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        accept="video/*"
        name="video-input"
      />
    </div>
  </div>
</template>

<style scoped>
.video-player {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-player video-player {
  border-radius: 10%;
}
.video-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.video-input input,
.video-input label {
  width: 100%;
  box-sizing: border-box;
}

.video-input label {
  cursor: default;
}
</style>
