<template>
  <div>
    <h3 class="sub-title">Hello!</h3>
    <p class="home-content">
      My name is Keith Hemsoth, and I am a Freelance Web Developer based out of Cleveland, Ohio!
    </p>
    <div class="projects-btn-cont">
      <nuxt-link class="projects-btn" to="/projects">Check out some of my work!</nuxt-link>
      <hr>
      <nuxt-link class="projects-btn" to="/contact">Reach out to me!</nuxt-link>

    </div>
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
  margin: 0 2rem;
}

.icon {
  margin: 4rem;
  font-size: 1.5rem;
}

.projects-btn-cont {
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  text-align: center;
  margin: 5rem 0;
}

.projects-btn {
  text-decoration: none;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #2c3e50;
  color: #2c3e50;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 2rem auto;
  width: 100%;
}

  @keyframes btnColorChange {
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: #2c3e50; }
  }

  .projects-btn:hover {
    cursor: pointer;
    color: #fff;
    background-color: #2c3e50;
    animation: btnColorChange 1s ease-out;
  }

  @media (min-width: 426px) {
    .projects-btn {
      width: 80%;
    }
  }

  @media (min-width: 769px) {
    .projects-btn {
      min-width: 60%;
    }
  }

</style>
