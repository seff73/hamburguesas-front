<template>
  <div class="bg-container">
    <video class="video-bg" src='../assets/backgroundVideo.mp4' autoplay muted loop />
  </div>
</template>

<script>
import BackgroundVideo from '../assets/backgroundVideo.mp4';
export default {
  name: 'video-bg',
  props: [ BackgroundVideo ],
  data () {

      return {}
  }
}
</script>

<style lang="css">
.video-bg {
  z-index: 0000;
  position: relative;
  top: 0;
  width: 60%;
  height: 60%;
  object-fit: cover;
  display: inline-flex;
  opacity: .85;
  border-radius: 14px;
}

</style>