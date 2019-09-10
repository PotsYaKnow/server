<template>
  <div>
    <div class="pot" v-for="potHistory in allPotHistory">
      <PotHistoryPanel v-bind:potHistory="potHistory" />
      <div class="flex justify-around">
        <router-link :to="{name: 'edit-pothistory', params: {potHistoryId: potHistory.id}}">
          <button class="btn btn-blue"> Edit </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
import PotHistoryPanel from './PotHistoryPanel'

export default {
  components: { PotHistoryPanel },
  name: 'PotHistory',
  props: [],
  data() {
    return {
      allPotHistory: null,
      pot: {},
      allPotStatuses: null

    }
  },
  async mounted () {
    const potId = this.$store.state.route.params.potId
    this.pot = (await PotService.getPot(potId)).data
    this.allPotStatuses = (await PotService.getAllPotStatuses()).data
  },
  watch: {
    '$route.params': {
      immediate: true,
      async handler (value) {
      console.log(value)
        this.allPotHistory = (await PotService.getPotHistory(value.potId)).data
      }
    }
  }
}

</script>
<style scoped>
.pot {
  padding: 10px;
  overflow: hidden;
}

.pot-name {
  font-size: 20px;
}

.pot-notes {
  font-size: 24px;
}

</style>
