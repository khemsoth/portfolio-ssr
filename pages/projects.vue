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
import kiwanisLogo from '../assets/images/Kiwanis.jpg'
import MCMImage from '../assets/images/jason-wong-kSlL887znkE-unsplash.jpg'
import FCSImage from 'assets/images/FCS.jpg'

export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          title: 'North Ridgeville Kiwanis Club',
          image: kiwanisLogo,
          description: 'Get all the information about the North Ridgeville, Ohio Kiwanis Club.',
          link: 'https://k18026.site.kiwanis.org/',
          alt: 'Kiwanis Club Logo'
        },
        {
          title: 'Morning Coffee Marketing',
          image: MCMImage,
          description: 'Landing page for a local social marketing agency.',
          link: 'https://morningcoffeemarketing.herokuapp.com/',
          alt: 'Cup of coffee on wooden table'
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