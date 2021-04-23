<template>
  <div class="header">
    <div class="title-cont">
     <h1 class="title">Keith Hemsoth</h1>
     <a href="https://pop-culture.us/Annual/1991.html" target="_blank" class="circa">c. 1991</a>
    </div>
    <div class="nav-cont">
      <div class="social-media-cont">
        <div class="icon-cont">
         <a class="soc-icon" href="https://www.linkedin.com/in/keithhemsoth/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin']" /><p class="soc-query">/in/keithhemsoth</p></a>
         <a class="soc-icon" href="https://github.com/khemsoth" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="fa-icon" :icon="['fab', 'github']" /><p class="soc-query">/khemsoth</p></a>
         <a class="soc-icon" href="https://twitter.com/khems17" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="fa-icon" :icon="['fab', 'twitter']" /><p class="soc-query">/khems17</p></a>       
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
    },
  }
}
</script>

<style>

  .header {
    background-color: #2c3e50;
    color: #ecf0f1;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
  }

  .title-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 50%;
  }

  .circa {
    color: #ecf0f1;
    text-decoration: none;
    margin: 0 auto;
  }

  .circa:hover {
    cursor: help;
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
    margin: 0 .5rem;
    font-size: 1.3rem;
    width: fit-content;
  }

  .soc-icon:hover {
    font-style: italic;
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
    color: #ecf0f1;
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
    background-color: #bdc3c7;
    padding: 1rem;
    border-radius: 1rem;
  }

  .nav-list-item {
    text-decoration: none;
    color: #34495e;
  }

  .nav-list-item:hover {
    font-weight: bolder;
  }

  .fa-icon {
    color: #ecf0f1;
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

  .soc-query {
    display: none;
  }

  @media (min-width: 426px) {
    .soc-icon {
      margin: 0 1rem;
    }
  }

  @media (min-width: 769px) {

    .nav-cont {
      width: 70vw;
      margin: 0 auto;
    }

    .icon-cont {
      display: flex;
      flex-direction: column;
    }

    .soc-icon {
      margin: .1rem 0;
    }

    .soc-query {
      color: #ecf0f1;
      display: inline-block;
      font-size: .9rem;
      margin-left: .5rem;
    }

    .nav-btn {
      display: none;
    }

    .closed-nav {
      visibility: visible;
    }

    .nav-list {
      position: static;
      display: flex;
      padding: 1rem 0;
      width: 100%;
      flex-direction: column;
      align-items: flex-end;
      background-color: rgba(0, 0, 0, 0);
      list-style-type: none;
    }

    .nav-list-item {
      color: #ecf0f1;
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

  @media (min-width: 1025px) {
    .nav-cont {
      width: 60vw;
      margin: 0 auto;
    }
  }

  @media (min-width: 1900px) {
    .nav-cont {
      width: 50vw;
      margin: 0 auto;
    }
  }

</style>
