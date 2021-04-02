<template>
  <div>
    <input class="nav-btn" v-on:click="navToggle" :class="{ open: isOpen, closed: !isOpen }" type="button" value="+">
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    navToggle() {
      if(this.isOpen === null) {
        this.isOpen = true
      }
      else {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style>
  .nav-btn {
    margin: 0 auto;
    font-size: 3rem;
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0)
  }

  .nav-btn:focus {
    outline: none;
  }

  .open {
    transform: rotate(45deg);
    transition-duration: .5s;
  }

  .closed {
    transform: rotate(-90deg);
    transition-duration: .5s;
  }

</style>