<template>
  <div class="potcard-container" >
    <div class="pot" v-for="pot in foundPots">
      <div class="flex justify-around">
        <div class="w-1/4 force-noselect w-1/2 max-w-3xl bg-white shadow-md mt-10
        flex flex-col">
          <potcard v-bind:potCardModel="pot" />
        </div>
      </div>
    </div>
    <h2 v-if="foundPots.length == 0"> No Pots Here...</h2>
  </div>
</template>
<script>
import UsersPotService from '@/services/UsersPotService'
import PotCard from './PotCard'

export default {
  components: { potcard: PotCard },
  data() {
    return {
      foundPots: [],
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (search) {

        this.foundPots = (await UsersPotService.getAll(search,
        this.$store.state.user.user.id)).data
      }

      }
    },
  methods: {
    editPot(pot) {
      this.$router.push({
        name: 'edit-pot',
        params: { potId: pot.potId}
      })
    },
    viewHistory(pot) {
      this.$router.push({
        name: 'view-pot',
        params: { potId: pot.potId}
      })
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

.pots::after {
  content: "";
  flex: auto;
}

</style>
