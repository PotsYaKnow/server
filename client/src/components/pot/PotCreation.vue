<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Create Pot">
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
            <option v-for="potStatus in allPotStatuses" v-bind:value="potStatus.value">
              {{ potStatus.text }}
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
import { mapState } from 'vuex'

export default {
  name: 'PotCreation',
  props: [],
  data() {
    return {
      allPotStatuses: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      pot: {
        name: null,
        status: null,
        notes: null,
        user: this.$store.user
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async createPot () {
      /*this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }*/

      try {
        await PotService.createPot(this.pot)
        this.$router.push({
          name: 'index'
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
