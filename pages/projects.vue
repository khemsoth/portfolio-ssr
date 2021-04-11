<template>
  <div>
    <h1 class="page-title">Projects</h1>
    <ul>
      <li
      is="Project"
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :image="project.image"
      :description="project.description"
      class="project"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import noteImage from '../assets/images/kelly-sikkema--1_RZL8BGBM-unsplash.jpg'
import fuelImage from '../assets/images/folco-masi-fwh28c0vUGk-unsplash.jpg'
import restaurantImage from 'assets/images/dmitriy-k-4zTf1NVuw-0-unsplash.jpg'

export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          title: 'test 1',
          image: noteImage,
          description: 'This is the description of the above project'
        },
        {
          title: 'project 2',
          image: fuelImage,
          description: 'This is the description of the above project'
        },
        {
          title: 'project 3',
          image: restaurantImage,
          description: 'This is the description of the above project'
        }
      ]
    }
  }
}
</script>

<style>

  .project {
    width: 90%;
    margin: 4rem 0;
    
  }

</style>