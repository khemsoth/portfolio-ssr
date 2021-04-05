<template>
  <div>
    <h1 class="page-title">Contact</h1>
    <form class="page-desc" name="contact" method="POST">
      <h4 class="contact-title">Name:</h4>
      <input class="contact-desc" type="text" name="name" placeholder="Enter Name Here" required>
      <h4 class="contact-title">Email:</h4>
      <input class="contact-desc" type="email" name="email" placeholder="Enter Email Here" required>
      <h4 class="contact-title">Message:</h4>
      <textarea class="contact-desc" name="message" rows="5" placeholder="Enter Message Here" required></textarea>
      <button class="" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

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