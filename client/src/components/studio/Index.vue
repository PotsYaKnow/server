<template>
  <div class=" container mx-auto">
<div>
    <router-link :to="{name: 'create-pot'}">
      <button class="btn btn-blue">Add Pot</button>
    </router-link>
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
