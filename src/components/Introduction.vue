<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="Introduction">
    <h1>Video Captionator</h1>
    <p>
      Make subtitles for your video and save the file as vtt or srt. You can
      upload a video to preview your captions with the video or just use it as a
      caption file generator.
    </p>
    <div class="icons">
      <a
        href="https://github.com/kushal-chandar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon :icon="faGithub" size="2x" class="icon github-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/kushal-chandar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="faLinkedin"
          size="2x"
          class="icon linkedin-icon"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.Introduction {
  display: flex;
  flex-direction: column;
  padding: 1%;
  margin: 1%;
  place-items: center;
  width: 100%;
}
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50vh;
  margin: 1%;
}

p {
  width: 70ch;
}

.icon {
  transition: color 0.3s ease, translate 0.3s ease;
  border: 2px solid transparent;
  border-radius: 5%;
}
.icon:hover {
  translate: 0px -5px;
}
.github-icon {
  color: #070707;
}
.github-icon:hover {
  color: #131313;
}

.linkedin-icon {
  color: #0077b5;
}
.linkedin-icon:hover {
  color: #00a6ff;
}
</style>
