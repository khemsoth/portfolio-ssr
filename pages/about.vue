<template>
  <div>
    <h1 class="page-title">About Me</h1>
    <main class="page-desc">
      <p class="about-content">
        My name is Keith Hemsoth. I am a Freelance Developer based in Cleveland, Ohio. From simple static websites to complex web applications, 
        I have always jumped on opportunities to exercise my creative muscle.
      </p>
      <p class="about-content">
        With an analytical mindset, and focus on mobile first development principles, I create intuitive websites and web apps with the user 
        experience being a top priority.
      </p>
      <p class="about-content">
        <nuxt-link class="nav-list-item contact-link" to="/contact">Reach out and let's make something great together!</nuxt-link>
      </p>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  .page-title {
    font-size: 3rem;
    margin: 2rem 1rem;
    font-style: italic;
  }

  .page-desc {
    margin: 1rem 2rem;
  }

  .about-content {
    margin: 2rem 0;
  }

  .contact-link {
    font-style: italic;
    font-size: 1.2rem;
  }

</style>