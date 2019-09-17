<template>
  <div >
    <panel title="Pot">
      <div>
        <div class="pot" v-for="pot in foundPots">
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
        <h2 v-if="foundPots == null"> No Pots Here..Go make some!!!</h2>
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
      foundPots: ''
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.foundPots = (await PotService.getAllPots(value)).data

      }
    }
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
