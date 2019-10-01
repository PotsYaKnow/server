<template>
  <div>
    <div class="flex">
      <button class="btn btn-blue" type="button" @click="deleteAllCheckpoints">Discard Pot</button>
    </div>
    <div class="flex flex-row w-5/6">
      <div class="w-9/12" v-for="potHistory in allPotHistory" @click="edit(potHistory)">
        <potcard v-bind:potCardModel="potHistory" />
      </div>
    </div>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
import PotCard from './PotCard'

export default {
  components: { potcard: PotCard },
  name: 'PotHistory',
  props: [],
  data() {
    return {
      allPotHistory: null,
      allPotStatuses: null

    }
  },
  async mounted () {
    const potId = this.$store.state.route.params.potId
    this.allPotHistory = (await PotService.getPotHistory(potId)).data
  },
  methods: {
    edit(potHistory) {
      this.$router.push({
        name: 'edit-pothistory',
        params: { potHistoryId: potHistory.potHistoryId }
      })
    },
    async deleteAllCheckpoints() {
      try {
        await PotService.deletePot(this.$store.state.route.params.potId)
        this.$router.push({
          name: 'index'
        })
      } catch (error) {
        console.log(error)
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
