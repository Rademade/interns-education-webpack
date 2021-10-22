<template>
  <div class="app">
    {{appName}}
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
        appName: process.env.VUE_APP_NAME || 'Default App name',
        counter: 0
      }
    },
  }
</script>
