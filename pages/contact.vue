<template>
  <div class="contact-page">
    <h1 class="page-title">Contact Me</h1>
    <form class="page-desc" name="contact">
      <h4 class="contact-title">Name:</h4>
      <input class="contact-desc" v-model="name" type="text" name="name" placeholder="Enter Name Here" required>
      <hr class="divider">
      <h4 class="contact-title">Email:</h4>
      <input class="contact-desc" v-model="email" type="email" name="email" placeholder="Enter Email Here" required>
      <hr class="divider">
      <h4 class="contact-title">Message:</h4>
      <textarea class="contact-desc" v-model="message" name="message" rows="5" placeholder="Enter Message Here" required></textarea>
      <input class="submit-btn" type="button" value="Send Message" v-on:click="submitContactForm">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitContactForm(e) {
      e.preventDefault
      let formInfo = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post('/api/contact', {
        name: this.name,
        email: this.email,
        message: this.message
      })
      this.name = '',
      this.email = '',
      this.message = ''
    }
  }
}
</script>

<style scoped>

  .page-title {
    font-size: 2.5rem;
    font-style: italic;
    text-align: center;
  }

  .page-desc {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .contact-title {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .contact-desc {
    margin: 1rem 0;
    margin-bottom: 2rem;
    border-radius: .3rem;
    border: 1px solid gray;
    padding: .5rem;
  }

  .submit-btn {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid black;
    border-radius: 1rem;
    padding: .5rem;
    width: 100%;
    align-self: flex-end;
    margin-top: 2rem;
  }

  @media (min-width: 769px) {
    .submit-btn {
      width: 30%;
    }
  }

</style>