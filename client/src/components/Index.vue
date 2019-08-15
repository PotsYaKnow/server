<template>
  <div class=" container mx-auto">
    <h1>
      Pots Ya Know
    </h1>
    <h2>
      Connecting the pottery community one score and slip at a time.
    </h2>
    <div>
      <router-link :to="{name: 'create-pot'}">
        <button class="btn btn-blue">
          Add Pot
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  props: [],
  components: {},
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
