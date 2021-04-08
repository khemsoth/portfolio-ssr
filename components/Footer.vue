<template>
  <div class="footer">
    <h3 class="footer-title">Keith Hemsoth</h3>
    <div class="social-media-cont">
      <a href="https://www.linkedin.com/in/keithhemsoth/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a href="https://github.com/khemsoth" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'

}
</script>

<style>
  .footer {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 10vh;
    background-color: lightblue;
    justify-content: space-between;
  }

  .footer-title {
  }

</style>