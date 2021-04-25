<template>
  <div class="project-cont">
    <div class="img-cont">
      <a :href="link" target="_blank"><img v-on:click="emitOpenProject" class="project-image" :src="image" :alt="alt"></a>
    </div>
    <div class="project-info">
      <h4 class="project-title">{{ title }}</h4>
      <p class="project-desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: String,
    image: String,
    description: String,
    link: String,
    alt: String
  },
  methods: {
    emitOpenProject() {
      this.$emit('open-project')
    }
  }
}
</script>

<style>

  .project-cont {
    margin: 3rem 0;
  }

  .project-image {
    width: 100%;
    min-height: 20vh;
    max-height: 30vh;
    border-radius: 1rem;
  }

  .project-image:hover {
    opacity: .5;
    transition-duration: 1s;
  }

  .project-info {
    margin: 1rem 0;
  }

  .project-title {
    font-size: 1.7rem;
    font-style: italic;
  }

  .project-desc {
    margin-top: 1rem;
  }

  @media (min-width: 550px) {
    .project-image {
      max-width: 70%;
    }

    .project-info {
      margin: 1rem auto;
      max-width: 70%;
    }

    .img-cont {
      text-align: center;
    }
  }

  @media (min-width: 769px) {
    .project-cont {
      display: flex;
      flex-direction: row;
    }

    .img-cont {
      width: 50%;
    }

    .project-info {
      width: 50%;
    }
  }

  @media (min-width: 1220px) {

    .project-title {
      font-size: 2rem;
    }

    .project-info {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1441px) {
    .project-cont {
      max-width: 100%;
    }

    .project-title {
      font-size: 2.3rem;
    }
  }

</style>