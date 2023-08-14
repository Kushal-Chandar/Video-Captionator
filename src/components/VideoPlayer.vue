<script setup lang="ts">
import { ref } from "vue";
import captionsURL from "./captionsURLState";
import fileName from "./fileNameState";

const videoObjectURL = ref("");
const handleFileChange = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    fileName.setValue(file.name.split(".")[0]);
    videoObjectURL.value = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div class="video-player">
    <video :src="videoObjectURL" controls autoplay>
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
      <label for="video-input">Upload video:</label>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  width: 100%;
}
.video-player video {
  width: 100%;
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
