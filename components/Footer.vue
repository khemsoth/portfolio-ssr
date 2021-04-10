<template>
  <div class="footer">
    <h3 class="footer-title">Keith Hemsoth</h3>
    <h5 class="circa">c. 1991</h5>
    <div class="social-media-cont">
      <a class="soc-icon" href="https://www.linkedin.com/in/keithhemsoth/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a class="soc-icon" href="https://github.com/khemsoth" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
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
    flex-direction: column;
    text-align: center;
    width: 100vw;
    height: 15vh;
    background-color: lightblue;
    justify-content: space-evenly;
    font-size: 1.5rem;
  }

  .circa {
    font-size: .7rem;
  }

  .soc-icon {
    color: black;
    padding: 0;
  }

</style>