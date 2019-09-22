<template>
  <div class=" container mx-auto">
    <div v-if="!$store.state.isUserLoggedIn">
      <h1>
        Pots Ya Know
      </h1>
      <h2>
        Connecting the pottery community one score and slip at a time.
      </h2>
    </div>
    <div>
      <router-link :to="{name: 'create-pot'}">
        <button class="btn btn-blue">Add Pot</button>
      </router-link>
    </div>
    <div v-if="$store.state.isUserLoggedIn">
      <searchPotField />
      <searchPotPanel/>

    </div>
  </div>
</template>
<script>
import SearchPotsPanel from './pot/SearchPotsPanel'
import SearchPotField from './pot/SearchPotField'

export default {
  name: 'Index',
  components: {
    'searchPotPanel': SearchPotsPanel,
    'searchPotField': SearchPotField
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
