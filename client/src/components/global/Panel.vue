<template>
  <div class="bg-white w-3/4 max-w-md mx-auto shadow-md mt-10">
    <div class="bg-blue-500" >
      <p class=" p-2 text-left text-white">{{title}}</p>
    </div>
    <div >
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
