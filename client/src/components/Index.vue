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
      <index-search-pot />
      <search-pot-panel>
      </search-pot-panel>
    </div>
  </div>
</template>
<script>
import SearchPotsPanel from './pot/SearchPotsPanel'
import IndexSearchPot from './pot/IndexSearchPot'

export default {
  name: 'Index',
  components: {
    'search-pot-panel': SearchPotsPanel,
    'index-search-pot': IndexSearchPot
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
