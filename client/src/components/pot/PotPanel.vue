<template>
  <div>
    <panel title="Pot">
      <div class="pot" v-for="pot in allPots" :key="pot.id">
        <div class="pot-title">
          {{pot.name}}
        </div>
        <div class="pot-note">
          {{pot.note}}
        </div>

      </div>
    </panel>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
export default {
  components: {
  },
  data() {
    return {

      allPots: null

    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
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
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.pot-name {
  font-size: 30px;
}

.pot-notes {
  font-size: 24px;
}

</style>
