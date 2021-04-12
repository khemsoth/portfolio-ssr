<template>
  <div class="project-cont">
    <a :href="link" target="_blank"><img v-on:click="emitOpenProject" class="project-image" :src="image"></a>
    <div>
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
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
  .project-image {
    width: 100%;
    height: 35vh;
  }

</style>