<template>
  <div>
    <panel title="Pot">
      <div class="pot" v-for="pot in allPots">
        <div class="pot-name">
          <p>{{pot.name}}</p>
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
        console.log(this.allPots)
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
  font-size: 30px;
}

.pot-notes {
  font-size: 24px;
}

</style>
