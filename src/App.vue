<template>
  <div id="app">
    <navbarComponent></navbarComponent>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import navbarComponent from '@/components/navbar.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'App',
  components: {
    navbarComponent
  }
})
</script>
