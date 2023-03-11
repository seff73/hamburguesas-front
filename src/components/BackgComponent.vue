<template>
  <div class="bg-container">
    <video class="video-bg">
      <source src='@/assets/backgroundVideo.mp4' type="video/mp4" autoplay muted loop />
    </video> 
  </div>
</template>

<script>
export default {
  name: 'video-bg',
  props: [],
  data() {
    return {

    }
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