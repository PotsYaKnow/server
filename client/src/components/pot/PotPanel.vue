<template>
  <div>
    <panel title="Pot">
      <div>
        <div class="pot" v-for="pot in allPots">
          <div class="flex justify-around">
            <p class="pot-name">{{pot.name}}</p>

            <router-link :to="{name: 'edit-pot', params: {potId: pot.id}}">
              <button class="btn btn-blue"> Edit </button>
            </router-link>

            <router-link :to="{name: 'view-pot', params: {potId: pot.id}}">
              <button class="btn btn-blue"> View </button>
            </router-link>
          </div>
        </div>
        <h2 v-if="allPots == null || allPots.length < 1"> No Pots Here..Go make some!!!</h2>
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

      allPots: null

    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.allPots = (await PotService.getAllPots()).data

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
