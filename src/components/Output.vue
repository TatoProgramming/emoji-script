<template>
    <div v-if="value">{{value}}</div>
    <div v-else>Results will be displayed here.</div>
</template>

<script>
export default {
  name: 'Output',
  props: ['value']
}
</script>

<style scoped>

</style>
