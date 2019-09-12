<template>
  <div>
    <panel title="Pot">
      <div>
        <div class="pot" v-for="pot in allPots">
          <div class="flex justify-around">
            <p class="pot-name">{{pot.name}}</p>
            <p class="pot-name">{{pot.status}}</p>

            <router-link :to="{name: 'edit-pot', params: {potId: pot.id}}">
              <button class="btn btn-blue"> Edit </button>
            </router-link>

            <router-link :to="{name: 'view-pot', params: {potId: pot.id}}">
              <button class="btn btn-blue"> View </button>
            </router-link>
          </div>
        </div>
        <h2 v-if="allPots == null"> No Pots Here..Go make some!!!</h2>
      </div>
    </panel>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
export default {
  components: {},
  data() {
    return {

      allPots: ''

    }
  },
  async mounted () {
  this.allPots = (await PotService.getAllPots()).data
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
