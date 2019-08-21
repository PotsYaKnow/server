<template>
  <div class=" container mx-auto">
    <h1>
      Pots Ya Know
    </h1>
    <h2>
      Connecting the pottery community one score and slip at a time.
    </h2>
    <div v-if="$store.state.isUserLoggedIn">
      <potpanel>
      </potpanel>
    </div>
  </div>
</template>
<script>
import PotPanel from './pot/PotPanel'
export default {
  name: 'Index',
  props: [],
  components: {
    'potpanel': PotPanel,
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
