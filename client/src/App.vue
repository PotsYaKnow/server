<template>
  <div id="app">
    <PageHeader />
    <main class="flex flex-col h-full" id="app">
      <router-view />
    </main>
  </div>
</template>
<script>
import PageHeader from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    Footer
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
