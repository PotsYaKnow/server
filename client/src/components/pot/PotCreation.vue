<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Create Pot">
      <form autocomplete="off" class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4 vertical-container-left">
          <label class="textfield-label" for="pot-name">
            Name
          </label>
          <input v-model="newPot.name" class="textfield" id="pot-name" type="text" placeholder="Pot Name">
        </div>
        <!-- Clay Body -->
        <div class="mb-4 vertical-container-left">
          <label class="textfield-label" for="claybody">
            Clay Body
          </label>
          <select id="claybody" v-model="newPot.clayBodyId">
            <option v-for="claybody in allClayBodies" v-bind:value="claybody.id">
              {{ claybody.name}}
            </option>
          </select>
        </div>
        <!-- Clay Body -->
        <!-- Pot Status -->
        <div class="mb-4 vertical-container-left">
          <label class="textfield-label" for="pot-status">
            Pot Status
          </label>
          <select id="pot-status" v-model="newPot.potStatusId">
            <option v-for="potStatus in allPotStatuses" v-bind:value="potStatus.id">
              {{ potStatus.name }}
            </option>
          </select>
        </div>
        <!-- Pot Status -->
        <!-- Glaze -->
        <div v-if="showGlaze" class="mb-4 vertical-container-left">
          <label class="textfield-label" for="glaze">
            Glaze
          </label>
          <select id="glaze" v-model="newPot.glazeId">
            <option v-for="glaze in allGlazes" v-bind:value="glaze.id">
              {{ glaze.name }}
            </option>
          </select>
        </div>
        <!-- Glaze -->
        <!-- Firing Temp -->
        <div v-if="showFiringTemp" class="mb-4 vertical-container-left">
          <label class="textfield-label" for="firingtemp">
            Firing Temperature
          </label>
          <select id="firingtemp" v-model="newPot.firingTempId">
            <option v-for="firingtemp in allFiringTemps" v-bind:value="firingtemp.id">
              {{ firingtemp.name }}
            </option>
          </select>
        </div>
        <!-- Firing Temp -->
        <!-- Firing Atmoshphere -->
        <div v-if="showFiringAtmosphere" class="mb-4 vertical-container-left">
          <label class="textfield-label" for="firingatmosphere">
            Firing Atmosphere
          </label>
          <select id="firingatmosphere" v-model="newPot.firingAtmosphereId">
            <option v-for="firingatmosphere in allFiringAtmospheres" v-bind:value="firingatmosphere.id">
              {{ firingatmosphere.name }}
            </option>
          </select>
        </div>
        <!-- Firing Atmoshphere -->
        <div class="mb-4 vertical-container-left">
          <span>Notes</span>
          <br>
          <textarea v-model="newPot.notes" placeholder="Add some notes...."></textarea>
        </div>
        <button class="btn btn-blue" v-on:click="createPot">
          Create</button>
      </form>
    </panel>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
import PotStatusService from '@/services/PotStatusService'
import ClayBodyService from '@/services/ClayBodyService'
import FiringTempService from '@/services/FiringTempService'
import FiringAtmosphereService from '@/services/FiringAtmosphereService'
import GlazeService from '@/services/GlazeService'

export default {
  name: 'PotCreation',
  props: [],
  data() {
    return {
      allPotStatuses: [],
      allClayBodies: [],
      allFiringTemps: [],
      allFiringAtmospheres: [],
      allGlazes: [],
      newPot: {
        clayBodyId: 1,
        potStatusId: 1,
        notes: null,
        glazeId: 1,
        firingTempId: 1,
        firingAtmosphereId: 1,
        name: ''
      }
    }
  },
  computed: {
    showFiringTemp: function () {
      return this.newPot.potStatusId > 4
    },
    showFiringAtmosphere: function () {
      return this.newPot.potStatusId > 5
    },
    showGlaze: function () {
      return this.newPot.potStatusId > 4
    }
  },

  methods: {
    async createPot () {
      try {
        await PotService.create(this.newPot)
        this.$router.push({
          name: 'index'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.allPotStatuses = (await PotStatusService.getAll()).data
    this.allClayBodies = (await ClayBodyService.getAll()).data
    this.allFiringTemps = (await FiringTempService.getAll()).data
    this.allFiringAtmospheres = (await FiringAtmosphereService.getAll()).data
    this.allGlazes = (await GlazeService.getAll()).data
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
  padding-left: 5px;
}

</style>
