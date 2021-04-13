<template>
  <div>
    <h1 class="page-title">Contact</h1>
    <form class="page-desc" name="contact">
      <h4 class="contact-title">Name:</h4>
      <input class="contact-desc" v-model="name" type="text" name="name" placeholder="Enter Name Here" required>
      <h4 class="contact-title">Email:</h4>
      <input class="contact-desc" v-model="email" type="email" name="email" placeholder="Enter Email Here" required>
      <h4 class="contact-title">Message:</h4>
      <textarea class="contact-desc" v-model="message" name="message" rows="5" placeholder="Enter Message Here" required></textarea>
      <input type="button" value="Send Message" v-on:click="submitContactForm">
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
      console.log(formInfo.email)
      this.name = '',
      this.email = '',
      this.message = ''
    }
  }
}
</script>

<style scoped>

  .page-desc {
    width: 90vw;
  }

  .contact-title {
    margin-top: 2rem;
  }

  .contact-desc {
    width: 90%;
    margin: 1rem 0;
  }

</style>