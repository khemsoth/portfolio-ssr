<template>
  <div class="project-cont">
    <a :href="link" target="_blank"><img v-on:click="emitOpenProject" class="project-image" :src="image"></a>
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
    link: String
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
  }

  .project-image {
    width: 100%;
    height: 35vh;
    border-radius: 1rem;
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

</style>