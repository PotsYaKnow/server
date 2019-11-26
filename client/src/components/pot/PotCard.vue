<template>
  <div class="potcard" @click="viewPot">
    <!--Picture will be above all this centered with margin auto TODO -->
    <!-- view button top right or bottom right -->
    <div class="mx-auto">
    <label class="truncate text-center"> {{potCardModel.name}}</label>
    </div>
    <div>
      <div class="potcard-section">
        <label class="potcard-label">{{potCardModel.ClayBody.name}}</label>
        <label class="potcard-sublabel">Claybody</label>
      </div>
      <div class="potcard-section">
        <label class="potcard-label">{{potCardModel.PotStatus.name}}</label>
        <label class="potcard-sublabel">Status</label>
      </div>
    </div>
    <hr />
    <div class="flex ">
      <div class="flex-grow">
        <div class="potcard-section">
          <p class="potcard-label">{{potCardModel.Glaze.name}}</p>
          <label class="potcard-sublabel">Glaze</label>
        </div>
        <div class="potcard-section">
          <p class="potcard-label">{{potCardModel.FiringAtmosphere.name}}</p>
          <label class="potcard-sublabel">Firing Atmos..</label>
        </div>
        <div class="potcard-section">
          <p class="potcard-label">{{potCardModel.FiringTemp.name}}</p>
          <label class="potcard-sublabel">Firing temp</label>
        </div>
      </div>
      <div class="flex-grow" name="slip">
        <div class="potcard-section">
          <p class="potcard-label">{{potCardModel.Slip.name}}</p>
          <label class="potcard-sublabel">Slip</label>
        </div>
        <div class="potcard-section">
          <p class="potcard-label">{{potCardModel.underglazeColor}}</p>
          <label class="potcard-sublabel">Underglaze color</label>
        </div>
        <div class="potcard-section">
          <p class="potcard-label">{{potCardModel.overglazeColor}}</p>
          <label class="potcard-sublabel">Overglaze color</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PotService from '@/services/PotService'
export default {
  components: {},
  props: ['potCardModel'],
  methods: {
    viewPot(pot) {
    console.log(pot)
      this.$router.push({
        name: 'view-pot',
        params: { potId: pot.id }
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
