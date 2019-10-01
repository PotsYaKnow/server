<template>
  <div>
    <div class="flex justify-between p-5">
      <h1> {{potHistory.name}} </h1>
      <button type="button" class="btn btn-red" v-on:click="deleteHistory">
        Delete this checkpoint</button>
    </div>
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
        <div class="flex justify-around">
          <button type="button" class="btn btn-blue" v-on:click="editHistory">
            Save Changes</button>
          <button type="button" class="btn btn-blue" v-on:click="cancel">
            Cancel</button>
        </div>
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
      potHistory: ''
    }
  },
  async mounted () {
    const potHistoryId = this.$store.state.route.params.potHistoryId
    this.potHistory = (await PotHistoryService.getPotHistory(potHistoryId)).data
    this.allPotStatuses = (await PotService.getAllPotStatuses()).data
  },
  methods: {
    async editHistory () {
      try {
        await PotHistoryService.editHistory(this.potHistory)
        this.$router.push({
          name: 'view-pot',
          params: { potId: this.potHistory.PotId }

        })
      } catch (err) {
        console.log(err)
      }
    },
    async deleteHistory () {
      try {

        await PotHistoryService.deleteHistory(this.potHistory.id)
        this.$router.push({
          name: 'view-pot',
          params: { potId: this.potHistory.PotId }
        })

      } catch (err) {
        console.log(err)
      }
    },
    cancel() {
      try {
        this.$router.push({
          name: 'view-pot',
          params: { potId: this.potHistory.PotId }

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
