<template>
  <div>
    <h3 class="sub-title">Hello!</h3>
    <p class="home-content">
      My name is Keith Hemsoth, and I am a Freelance Developer based out of Cleveland, Ohio!
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

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

.sub-title {
  font-size: 2.5rem;
  margin: 4rem;
  text-align: center;
}

.home-content {
  text-align: center;
}

.icon {
  margin: 4rem;
  font-size: 1.5rem;
}

</style>
