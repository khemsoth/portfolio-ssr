<template>
  <div>
    <input class="nav-btn" v-on:click="navToggle" :class="{ open: isOpen, closed: !isOpen }" type="button" value="+">
    <div :class="{ 'nav-open': isOpen, 'nav-closed': !isOpen }"  class="nav">
    <ul class="nav-list">
      <li><nuxt-link class="nav-list-item" to="/">Home</nuxt-link></li>
      <li><nuxt-link class="nav-list-item" to="/about">About</nuxt-link></li>
      <li><nuxt-link class="nav-list-item" to="/projects">Projects</nuxt-link></li>
      <li><nuxt-link class="nav-list-item" to="/contact">Contact</nuxt-link></li>
    </ul>
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

  .nav-list {
    list-style-type: none;
    width: 15vw;
    border: 1px solid black;

  }

  .nav-list-item {
    text-decoration: none;
  }

  @keyframes menuDown {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes menuUp {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }

  .nav-open {
    animation: menuDown .5s ease-in-out forwards;
    transform-origin: top;
    visibility: visible
  }

  .nav-closed {
    animation: menuUp .5s ease-in-out forwards;
    transform-origin: top;
  }

</style>