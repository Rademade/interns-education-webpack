<template>
  <div class="app">
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'About'}">About</router-link>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        counter: 0
      }
    },
  }
</script>
