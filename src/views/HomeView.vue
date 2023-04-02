<script setup>
import { computed, onMounted, ref } from "vue";
const watchedTime = ref(0);
const userHasWatched = ref(false);
var video = null;

onMounted(() => {
  video = document.getElementById("myVideo");
  video.addEventListener("timeupdate", function() {
    checkIfFinishVideo();
  });
  console.log(video);
})

const checkIfFinishVideo = () => {
  watchedTime.value = video.currentTime;
    if (watchedTime.value >= video.duration) {
      console.log("User has seen the whole video.");
      userHasWatched.value = true;
    }
}

computed(() => {
  var hej = console.log(watchedTime.value);
})
</script>

<template>
  <h1>Home</h1>
  <video id="myVideo" src="@/assets/videos/videoplayback.mp4" controls playinline webkit-playsinline></video>

  <h1 v-if="userHasWatched">Well done! :D </h1>
</template>

<style lang="scss" scoped>
#myVideo {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  }
</style>