<template>
  <div>
    <div class="pot" v-for="potHistory in allPotHistory">
      <div class="flex justify-around">
        <div @click="edit(potHistory)">
          <potcard v-bind:potCardModel="potHistory" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
import PotHistoryPanel from './PotHistoryPanel'
import PotCard from './PotCard'

export default {
  components: { PotHistoryPanel, potcard: PotCard },
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

        this.allPotHistory = (await PotService.getPotHistory(value.potId)).data
      }
    }
  },
  methods: {
    edit(potHistory) {
      this.$router.push({
        name: 'edit-pothistory',
        params: { potHistoryId: potHistory.id }
      })
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
