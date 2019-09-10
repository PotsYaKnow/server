<template>
  <div>
    <p >{{ allPotStatuses[potHistory.PotStatusId - 1].status}}</p>
    <p >{{potHistory.notes}}</p>
  </div>
</template>
<script>
import PotService from '@/services/PotService'

export default {
  name: 'PotHistoryPanel',
  props: [
    'potHistory'
  ],
  data() {
    return {
      allPotStatuses: null,
    }
  },
  async mounted () {
    this.allPotStatuses = (await PotService.getAllPotStatuses()).data
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
