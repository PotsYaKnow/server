<template>
  <div class="bg-white ">
    <div class="bg-blue-500" >
      <h3>{{title}}</h3>
    </div>
    <div class="w-3/5 sm:w-auto md:w-3/5 lg:w-3/4 xl:w-3/4">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Panel',
  props: [
    'title'
  ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
