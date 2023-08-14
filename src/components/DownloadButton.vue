<script setup lang="ts">
const props = defineProps<{
  url: string;
  filetype: string;
  filename: string;
}>();

const download = () => {
  const link = document.createElement("a");
  if (link) {
    link.href = props.url;
    link.download =
      (props.filename ? props.filename : "captions") + "." + props.filetype; // Set the desired file name
    link.target = "_blank";
    link.click();
  }
};
</script>

<template>
  <button @click="download">Download as {{ filetype }}</button>
</template>

<style scoped>
button {
  margin: 10px;
}
</style>
