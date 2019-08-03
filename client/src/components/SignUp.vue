<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Sign Up">
      <form class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
         leading-tight focus:outline-none
         focus:shadow-outline" id="email" type="text" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded
        w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
        focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
        </div>
      </form>
    </panel>
    <footer class="flex justify-around">
      <h1>
        Pots Ya Know
      </h1>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'signup',
  props: []
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
