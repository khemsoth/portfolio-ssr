<template>
  <div class="project-cont">
    <img class="project-image" :src="image">
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
    description: String
  }
}
</script>

<style>
  .project-image {
    width: 100%;
    height: 35vh;
  }

</style>