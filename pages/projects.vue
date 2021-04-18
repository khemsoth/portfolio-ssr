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
          link: 'https://jot-a-note.netlify.app/'
        },
        {
          title: 'Flag-to-Flag Fuel Calculator',
          image: fuelImage,
          description: 'Fuel usage calculator with average laptime calculator to use the proper amount of fuel for your next race session.',
          link: 'https://flag-to-flag-fuel.netlify.app/'
        },
        {
          title: 'Fantastic Concrete Solutions',
          image: FCSImage,
          description: 'Landing page for a local construction company, specializing in concrete washing, sealing, and repair.',
          link: 'https://fantastic-concrete-solutions.herokuapp.com/'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style>

  .page-title-projects {
    font-size: 2.5rem;
    margin: 2rem 1rem;
    font-style: italic;
  }

  .project {
    width: 90%;
    margin: 4rem auto;
  }

  @media (min-width: 460px) {
    .project {
      width: 60%;
    }

    .projects {
      padding: 0;
      margin: 0 auto;
    }

    .page-title-projects {
      margin-left: 6rem;
    }
  }

  @media (min-width: 600px) {
    .project {
      width: 50%;
    }
  }

  @media (min-width: 720px) {
    .project {
      width: 45%;
    }

    .page-title-projects {
      margin-left: 9rem;
    }
  }

  @media (min-width: 769px) {
    .page-title-projects {
      margin-left: 1rem;
    }

    .project {
      width: 90%;
    }
  }
</style>