<template>
  <div>
    <panel class="bg-white  w-3/4 max-w-md mx-auto" title="Create Pot">
      <form autocomplete="off" class="rounded px-8 pt-2 pb-8 mb-4">
        <div class="mb-4 vertical-container-left">
          <label class="textfield-label" for="pot-name">
            Name*
          </label>
          <input v-bind:class="{ 'is-invalid': attemptSubmit && missingName }" v-model="newPot.name" class="textfield" id="pot-name" type="text" placeholder="What's your pot's name?" />
          <div v-if="attemptSubmit && missingName" class="invalid-feedback">This field is required.</div>
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
        <!-- Publish -->
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
        <!-- Slip -->
        <div v-if="showSlip" class="mb-2 mr-5 vertical-container-left">
          <label class="textfield-label" for="slip">
            Slip Type
          </label>
          <select id="slip" v-model="newPot.slipId">
            <option v-for="slip in allSlips" v-bind:value="slip.id">
              {{ slip.name }}
            </option>
          </select>
        </div>
        <div v-if="showSlip && showSlipColor" class="mb-4 vertical-container-left">
          <label class="textfield-label" for="slip-color">
            Slip Color
          </label>
          <input v-model="newPot.slipColor" class="textfield color-field" id="slip-color" type="text" placeholder="Enter color by hex code">
        </div>
        <!-- Slip -->
        <!-- UnderGlaze -->
        <div v-if="showSlip" class="mb-4 vertical-container-left">
          <label class="textfield-label" for="underglaze-color">
            Underglaze
          </label>
          <input v-model="newPot.underglazeColor" class="textfield color-field" id="underglaze-color" type="text" placeholder="Enter color by hex code">
        </div>
        <!-- UnderGlaze -->
        <!-- OverGlaze -->
        <div v-if="showSlip" class="mb-4 vertical-container-left">
          <label class="textfield-label" for="overglaze-color">
            Overglaze
          </label>
          <input v-model="newPot.overglazeColor" class="textfield color-field" id="overglaze-color" type="text" placeholder="Enter color by hex code">
        </div>
        <!-- OverGlaze -->
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
        <div class="mb-2 vertical-container-left">
          <span>Notes</span>
          <textarea v-model="newPot.notes" placeholder="Add some notes...."></textarea>
        </div>
        <!-- Publish -->
        <div class="mb-4 horizontal-container">
          <label class="mr-2 textfield-label" for="published">
            Publish
          </label>
          <input v-model="newPot.published" id="published" type="checkbox">
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
import SlipService from '@/services/SlipService'

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
      allSlips: [],
      attemptSubmit: false,
      newPot: {
        clayBodyId: 1,
        potStatusId: 1,
        notes: null,
        glazeId: 1,
        firingTempId: 1,
        firingAtmosphereId: 1,
        slipId: 1,
        slipColor: null,
        underglazeColor: null,
        overglazeColor: null,
        name: null,
        published: true
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
    },
    showSlip: function () {
      return this.newPot.potStatusId == 3
    },
    showSlipColor: function () {
      return this.newPot.slipId > 1
    },
    missingName: function () {
      return this.newPot.name == null || this.newPot.name.trim() === ""
    }
  },

  methods: {
    async createPot () {
      try {
        if (this.validateForm()) {
          await PotService.create(this.newPot)
          this.$router.push({
            name: 'index'
          })
        }
      } catch (err) {
        console.log(err)
      }
    },
    validateForm() {

      this.attemptSubmit = true;
      return this.missingName ? false : true;


    }
  },
  async mounted () {
    this.allPotStatuses = (await PotStatusService.getAll()).data
    this.allClayBodies = (await ClayBodyService.getAll()).data
    this.allFiringTemps = (await FiringTempService.getAll()).data
    this.allFiringAtmospheres = (await FiringAtmosphereService.getAll()).data
    this.allGlazes = (await GlazeService.getAll()).data
    this.allSlips = (await SlipService.getAll()).data
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  resize: none;
  padding-left: 5px;
  width: 100%;
}

.color-field {
  width: 200px;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
}

</style>
