<template>
  <div class="flex justify-center">
    <div class="flex">
      <input class="textfield" v-model="search" type="search" aria-label="Search by pot name" placeholder="Search by pot name" />
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import PotService from '@/services/PotService'

export default {
  name: '',
  props: [],
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'index'
      }

      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 200),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
