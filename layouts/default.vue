<template>
  <div class="page">
    <Header class="header"/>
    <Nuxt class="content" />
    <!--<Footer class="footer"/> -->
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  height: 100%;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  height: 100%;
  max-width: 100vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  height: 20vh;
  max-width: 100vw;
  background-color: red;
}

.content {
  flex: 1;
  min-height: 100%;
  margin: 0 auto;
  width: 90vw;
}

@media (min-width: 769px) {
  .content {
    margin: 0 auto;
    width: 70vw;
  }
}

@media (min-width: 1025px) {
  .content {
    width: 60vw;
  }
}

@media (min-width: 1441px) {
  .content {
    width: 50vw;
  }
}

</style>
