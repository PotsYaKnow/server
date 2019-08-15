<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Sign Up">
      <form autocomplete="off" class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
         leading-tight focus:outline-none
         focus:shadow-outline" id="email" type="text" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" autocomplete="new-password" class="shadow appearance-none border border-red-500 rounded
        w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
        focus:shadow-outline" id="password" type="password" placeholder="*******">
        </div>
        <div v-html="error" class="danger-alert"> </div>
        <br>
        <div>
          <button class="btn btn-blue" @click="signup">
            Sign Up
          </button>
        </div>
      </form>
    </panel>
    <footer class="flex flex-col">
      <h1>
        Pots Ya Know
      </h1>
      <h1>(P.Y.K.)</h1>
    </footer>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'signup',
  props: [],
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async signup () {
      try {
        const response = await AuthenticationService.signup({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'index'
        })

      } catch (error) {

        this.error = error.response.data.error
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}

</style>
