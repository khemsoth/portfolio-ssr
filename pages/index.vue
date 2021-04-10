<template>
    <h3 class="sub-title">Web Developer</h3>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  name: 'Home',
  components: {
    KinesisContainer,
    KinesisElement
  }
}
</script>

<style>
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
*/

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.container {
  min-height: 100%;
  text-align: center;
  overflow: hidden;
}

.sub-title {
  font-size: 2.5rem;
  margin: 4rem;
}

.icon {
  margin: 4rem;
  font-size: 1.5rem;
}

.kin-parent {
  min-height: 100%;
}

</style>
