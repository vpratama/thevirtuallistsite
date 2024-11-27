<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
</script>

<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
/* Add your styles here */
</style>