<template>
  <div class="pot-card force-noselect w-1/2 max-w-3xl bg-white shadow-md mt-10
        flex flex-col" @click="viewPot">
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
    viewPot() {
      this.$router.push({
        name: 'view-pot',
        params: { potId: this.$props.potCardModel.potId }
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
