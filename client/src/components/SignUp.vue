<template>

<div class=" container mx-auto">

<panel title="Sign Up">
  <form name="signup" auto-complete="off">
    <input type="text" placeholder="Email" v-model="email" />
    <br>
    <input placeholder="Password" type="password" auto-complete="new-password" v-model="password" />
    <br>
    <button class="bg-blue-500">
      Sign Up</button>
  </form>
</panel>

</div>

</template>
<script>

export default {
  name: 'signup',
  props: [
  ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
