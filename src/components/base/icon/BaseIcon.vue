<template>
  <div>
    <svg>
      <use :href="`#${name}`"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'BaseIcon',
    props: {
      name: {
        type: String,
        required: true,
      }
    },
    methods: {
      async loadIcon() {
        await import(/* webpackChunkName: "[request]" */`../../../assets/sprite/${this.name}.svg`)
      }
    },
    created() {
      this.loadIcon();
    }
  }
</script>

<style scoped>

</style>
