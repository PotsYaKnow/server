<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Edit Pot">
      <form class="rounded px-8 pt-2 pb-8 mb-4">
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
          <select id="pot-status" v-model="pot.status">
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
        <button class="btn btn-blue" v-on:click="editPot">
          Edit</button>
      </form>
    </panel>
  </div>
</template>
<script>
import PotService from '@/services/PotService'

export default {
  name: 'PotEditing',
  props: [],
  data() {
    return {
      allPotStatuses: '',
      pot: {
        name: null,
        status: null,
        notes: null,
        UserId: null
      }
    }
  },
  async mounted () {
    const potId = this.$store.state.route.params.potId
    this.pot = (await PotService.getPot(potId)).data
  },
  methods: {
    async editPot () {
      try {
        await PotService.editPot(this.pot)
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
</style>
