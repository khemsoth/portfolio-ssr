<template>
  <div class="header">
    <div class="title-cont">
     <h1 class="title">Keith Hemsoth</h1>
     <p class="circa">c. 1991</p>
    </div>
    <div class="nav-cont">
      <div class="social-media-cont">
        <div class="icon-cont">
         <a class="soc-icon" href="https://www.linkedin.com/in/keithhemsoth/" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
         <a class="soc-icon" href="https://github.com/khemsoth" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'github']" /></a>
        </div> 
      </div>
      <div v-on-clickaway="away" class="nav">
        <input class="nav-btn" v-on:click="navToggle" :class="{ open: isOpen, closed: !isOpen }" type="button" value="+">
        <div class="nav-bar" :class="{ 'nav-open': isOpen, 'closed-nav': isClosed, 'nav-closed': animate }">
          <ul class="nav-list">
            <li v-on:click="closeMenu"><nuxt-link class="nav-list-item" to="/">Home</nuxt-link></li>
            <li v-on:click="closeMenu"><nuxt-link class="nav-list-item" to="/about">About</nuxt-link></li>
            <li v-on:click="closeMenu"><nuxt-link class="nav-list-item" to="/projects">Projects</nuxt-link></li>
            <li v-on:click="closeMenu"><nuxt-link class="nav-list-item" to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Header',
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
      isClosed: true,
      animate: false,
    }
  },
  methods: {
    navToggle() {
      if(this.isOpen === false) {
        this.isOpen = true
        this.isClosed = false
      }
      else {
        this.isOpen = !this.isOpen
        this.animate = true
        setTimeout(() => {this.animate = false; this.isClosed = !this.isClosed}, 500)
}
    },
    closeMenu() {
      this.isOpen = false
      this.animate = true
      setTimeout(() => {this.animate = false; this.isClosed = true}, 500)
    },
    away() {
      this.closeMenu()
    }
  }
}
</script>

<style>
  .header {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
    color: black;
  }

  .title-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 50%;
  }

  .social-media-cont {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .icon-cont {
    padding: 0 1rem;
  }

  .soc-icon {
    margin: 0 1rem;
    font-size: 1.3rem;
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
  }

  .nav-cont {
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .nav-btn {
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    width: 3rem;
    padding: 0;
    font-size: 2rem;
    align-self: flex-end;
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
    position: absolute;  
    width: 45vw; 
    right: 1rem;
    background-color: lightslategray;
    padding: 1rem;
    border-radius: 1rem;
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
    -webkit-animation: menuDown .5s ease-in-out forwards;
    -ms-animation: menuDown .5s ease-in-out forwards;
    -moz-animation: menuDown .5s ease-in-out forwards;
    -o-webkit-animation: menuDown .5s ease-in-out forwards;
    transform-origin: top;
    visibility: visible;
    z-index: 1;
  }

  .nav-closed {
    animation: menuUp .5s ease-in-out forwards;
    -webkit-animation: menuUp .5s ease-in-out forwards;
    -ms-animation: menuUp .5s ease-in-out forwards;
    -moz-animation: menuUp .5s ease-in-out forwards;
    -o-webkit-animation: menuUp .5s ease-in-out forwards;
    transform-origin: top;
    z-index: 1;
  }

  .closed-nav {
    visibility: hidden;
  }

  @media (min-width: 769px) {
    .nav-btn {
      display: none;
    }

    .closed-nav {
      visibility: visible;
    }

    .nav-list {
      position: static;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      background-color: rgba(0, 0, 0, 0);
      list-style-type: none;
    }

    .nav-list-item {
      color: black;
      margin: 1rem;
    }

    .close-menu {
      animation: none;
    }

    .nav-open {
      animation: none;
    }

    .nav-closed {
      animation: none;
    }
  }

</style>