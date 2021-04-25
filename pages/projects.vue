<template>
  <div>
    <h1 class="page-title-projects">Projects</h1>
    <ul class="projects">
      <li
      is="Project"
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :image="project.image"
      :description="project.description"
      :link="project.link"
      class="project"
      >
      </li>
    </ul>
  </div>
</template>

<script>
import noteImage from '../assets/images/kelly-sikkema--1_RZL8BGBM-unsplash.jpg'
import fuelImage from '../assets/images/folco-masi-fwh28c0vUGk-unsplash.jpg'
import FCSImage from 'assets/images/FCS.jpg'

export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          title: 'Jot It Down',
          image: noteImage,
          description: 'Simple note app to keep track of anything you need to remember.',
          link: 'https://jot-a-note.netlify.app/',
          alt: 'Array of 9 post-it notes'
        },
        {
          title: 'Flag-to-Flag Fuel Calculator',
          image: fuelImage,
          description: 'Fuel usage calculator with average laptime calculator to use the proper amount of fuel for your next race session.',
          link: 'https://flag-to-flag-fuel.netlify.app/',
          alt: 'Vintage red fuel pump'
        },
        {
          title: 'Fantastic Concrete Solutions',
          image: FCSImage,
          description: 'Landing page for a local construction company, specializing in concrete washing, sealing, and repair.',
          link: 'https://fantastic-concrete-solutions.herokuapp.com/',
          alt: 'Outdoor patio set with grill on wood floor'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

  .projects {
    padding: 0;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  .page-title-projects {
    font-size: 2.5rem;
    margin: 2rem 1rem;
    font-style: italic;
    text-align: center;
  }

  @media (min-width: 321px) {
    .projects {
      width: 75vw;
    }
  }

  @media (min-width: 1025px) {
    .projects {
      max-width: 50vw;
    }
  }

  @media (min-width: 1900px) {
    .projects {
      max-width: 50vw;
    }
  }

</style>