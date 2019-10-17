<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Create Pot">
      <form autocomplete="off" class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4">
          <label class="textfield-label" for="pot-name">
            Name
          </label>
          <input v-model="pot.name" class="textfield" id="pot-name" type="text" placeholder="Pot Name">
        </div>
        <div class="mb-4">
          <label class="textfield-label" for="pot-status">
            Pot Status
          </label>
          <select id="pot-status" v-model="pot.PotStatusId">
            <option v-for="potStatus in allPotStatuses" v-bind:value="potStatus.id">
              {{ potStatus.status }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <span>Notes</span>
          <br>
          <textarea v-model="pot.notes" placeholder="Add some notes...."></textarea>
        </div>
        <button class="btn btn-blue" v-on:click="createPot">
          Create</button>
      </form>
    </panel>
  </div>
</template>
<script>
import PotService from '@/services/PotService'

export default {
  name: 'PotCreation',
  props: [],
  data() {
    return {
      allPotStatuses: '',
      pot: {
        name: null,
        PotStatusId: 1,
        notes: null,
        UserId: this.$store.state.user.id
      }
    }
  },
  methods: {
    async createPot () {

      try {
        await PotService.createPot(this.pot)
        this.$router.push({
          name: 'index'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.allPotStatuses = (await PotService.getAllPotStatuses()).data

      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

textarea{
  resize: none;
  padding-left: 5px;
}
</style>
