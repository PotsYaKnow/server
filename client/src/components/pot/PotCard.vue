<template>
  <div class="w-3/5 bg-white shadow-md mt-10
        flex flex-col  ">
    <div class="self-start w-full truncate">
    <p class="truncate"> {{potCardModel.name}}</p>
    </div>
    <p class="w-full self-start pot-name">{{potCardModel.status}}</p>
    <p class="self-end pot-name">{{potCardModel.updatedAt}}</p>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
export default {
  components: {},
  props: ['potCardModel'],
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
