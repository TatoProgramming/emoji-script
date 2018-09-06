<template>
    <button class="ui button" @click="pushText">{{keyObj.emoji}}</button>
</template>

<script>
export default {
  name: 'key',
  props: ['keyObj'],
  methods: {
    pushText () {
      console.log(this.keyObj)
      this.$store.commit('addText', this.keyObj)
    }
  },
  beforeMoujjjjkajsdf;lkkjasdfl;kjasdf;lkjsadflkjjjntjjjj () {
    window.addEventListener('keypress', (e) => {
      console.log(e.keyCode)
      if (e.keyCode === this.keyObj.keyCode) {
        this.pushText()
      }
    })
  }
}
</script>

<style scoped>

</style>
