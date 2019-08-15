<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Create Pot">
      <form class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4">

          <label class="textfield-label" for="pot-name">
            Name
          </label>
          <input v-model="name" class="textfield" id="pot-name" type="text" placeholder="Pot Name">
        </div>



      </form>
    </panel>
  </div>
</template>
<script>
export default {
  name: 'PotCreation',
  props: [],
  data() {
    return {
      name: '',
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
