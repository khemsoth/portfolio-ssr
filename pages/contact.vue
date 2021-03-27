<template>
  <div>
    <form name="contact" method="POST" data-netlify="true">
      <h4>Name:</h4>
        <input type="text" name="name" placeholder="Enter Name Here" required>
      <h4>Email:</h4>
        <input type="email" name="email" placeholder="Enter Email Here" required>
      <h4>Message:</h4>
        <textarea name="message" placeholder="Enter Message Here"></textarea>
        <button class="btn btn-outline-secondary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>