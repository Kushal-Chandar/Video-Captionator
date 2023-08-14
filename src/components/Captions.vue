<script setup lang="ts">
import { ref } from "vue";
import captionsURL from "./captionsURLState";
import { createWebVTT, convertWebVTTToSRT } from "./subtitles";
import DownloadButton from "./DownloadButton.vue";
import fileName from "./fileNameState";

interface Timestamps {
  arr: { start: string; caption: string; end: string }[];
}

const timestamps = ref<Timestamps>({
  arr: [],
});
const getId = (text: string, index: number) => text + index;
const addNewRow = () => {
  let startValue = "00:00:00.000";
  const lastElemIndex = timestamps.value.arr.length - 1;
  if (lastElemIndex >= 0) {
    startValue = timestamps.value.arr[lastElemIndex].end;
  }
  timestamps.value.arr[timestamps.value.arr.length - 1];
  timestamps.value.arr.push({
    start: startValue,
    caption: "",
    end: startValue,
  });
};
const removeFromArray = (index: number) =>
  timestamps.value.arr.splice(index, 1);

let srtURL = "";

const confirmChanges = () => {
  const webvttContent = createWebVTT(timestamps.value.arr);
  console.log(webvttContent);
  const srtContent = convertWebVTTToSRT(webvttContent);
  captionsURL.setValue(
    URL.createObjectURL(new Blob([webvttContent], { type: "text/vtt" }))
  );
  srtURL = URL.createObjectURL(new Blob([srtContent], { type: "text/srt" }));
};
</script>

<template>
  <div class="caption-container">
    <table class="table">
      <colgroup>
        <col class="time" />
        <col class="captions" />
        <col class="time" />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Start</th>
          <th>Caption</th>
          <th>End</th>
          <th class="display-none">Operation Buttons</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(timestamp, index) in timestamps.arr"
          :key="index"
          class="tr-inputs"
        >
          <td class="time-length">
            <input
              type="text"
              :id="getId('timestamp_start', index)"
              :name="getId('timestamp_start', index)"
              v-model="timestamp.start"
            />
            <label :for="getId('timestamp_start', index)" class="display-none"
              >Caption Start Timing</label
            >
          </td>
          <td>
            <textarea
              :id="getId('caption', index)"
              :name="getId('caption', index)"
              v-model="timestamp.caption"
              wrap="soft"
              rows="1"
              class="captions"
            ></textarea>
            <label :for="getId('caption', index)" class="display-none"
              >Caption Start</label
            >
          </td>
          <td>
            <input
              type="text"
              :id="getId('timestamp_end', index)"
              :name="getId('timestamp_end', index)"
              v-model="timestamp.end"
            />
            <label :for="getId('timestamp_end', index)" class="display-none"
              >Caption End Timing</label
            >
          </td>
          <td>
            <button
              @click="removeFromArray(index)"
              title="Delete this timestamp"
            >
              🗑
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <button @click="addNewRow" title="Add a new time stamp">+</button>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <button @click="confirmChanges" title="Add a new time stamp">
              Confirm Changes
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="captionsURL.value" class="downloads-container">
      <DownloadButton
        :filename="fileName.value"
        filetype="vtt"
        :url="captionsURL.value"
      />
      <DownloadButton :filename="fileName.value" filetype="srt" :url="srtURL" />
    </div>
  </div>
</template>

<style scoped>
.caption-container {
  flex-basis: 50%;
  font-size: 1.25rem;
  max-height: 50vh;
  overflow-y: auto;
  flex-grow: 1;
  background-color: #101010;
  border-radius: 5px;
}

.downloads-container {
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  border-radius: 5px;
  margin: 10px;
  justify-content: space-evenly;
}
.caption-container > table {
  table-layout: fixed;
  width: 100%;
}

.caption-input {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
}

.display-none {
  display: none;
}

.table th {
  padding: 2%;
}
.table th,
.table td {
  place-items: center;
}
.time {
  width: 16%;
}

.captions {
  width: 62%;
}
textarea.captions {
  width: 100%;
  resize: vertical;
  box-sizing: border-box;
  display: block;
}

.table input,
button {
  width: 100%;
  box-sizing: border-box;
}
</style>
