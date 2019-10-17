<template>
  <div>
    <div class="self-start w-full truncate">
      <p class="truncate"> {{potCardModel.name}}</p>
    </div>
    <p class="w-full self-start pot-name">{{potCardModel.status}}</p>
    <p class="self-end">{{potCardModel.updatedAt}}</p>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
export default {
  components: {},
  props: ['potCardModel'],
  methods: {
    viewPot(pot) {
      this.$router.push({
        name: 'view-pot',
        params: { potId: pot.potId}
      })
    }
  }

}

</script>
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

.pot-card {
  cursor: pointer;
}

.pot-card:hover {
  cursor: pointer;
}

</style>
