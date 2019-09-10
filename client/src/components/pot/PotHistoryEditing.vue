<template>
  <div>
  <h1> {{pot.name}} </h1>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Edit Pot">
      <form class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4">
          <label class="textfield-label" for="pot-status">
            Pot Status
          </label>
          <select id="pot-status" v-model="potHistory.PotStatusId">
            <option v-for="potStatus in allPotStatuses" v-bind:value="potStatus.id">
              {{ potStatus.status }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <span>Notes</span>
          <br>
          <textarea v-model="potHistory.notes" placeholder="Add some notes...."></textarea>
        </div>
        <button class="btn btn-blue" v-on:click="editHistory">
          Save</button>
      </form>
    </panel>
  </div>
</template>
<script>
import PotHistoryService from '@/services/PotHistoryService'
import PotService from '@/services/PotService'

export default {
  name: 'PotHistoryEditing',
  props: [],
  data() {
    return {
      allPotStatuses: '',
      pot: null,
      potHistory: null
    }
  },
  async mounted () {
    const potHistoryId = this.$store.state.route.params.potHistoryId
    this.potHistory = (await PotHistoryService.getPotHistory(potHistoryId)).data
    this.pot = (await PotService.getPot(this.potHistory.PotId)).data
    this.allPotStatuses = (await PotService.getAllPotStatuses()).data
  },
  methods: {
    async editHistory () {
      try {
        await PotHistoryService.editHistory(this.potHistory)
        this.$router.push({
          name: 'view-pot',
          params: {potId: this.pot.id}

        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
