<!--suppress HtmlFormInputWithoutLabel -->
<template>
    <div class="ui form container">
      <div class="field">
        <textarea name="editor" id="editor" cols="30" rows="10" v-model="text"></textarea>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Editor',
  computed: {
    text () {
      return this.$store.state.text
    }
  }
}
</script>

<style scoped>

</style>
