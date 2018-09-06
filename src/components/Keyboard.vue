<template>
    <div class="ui twelve column grid">
      <div class="column" v-for="(key, index) in keys" :key="index">
        <Key :keyObj="key"/>
      </div>
    </div>
</template>

<script>
import keys from '../store/keys'
import Key from './Key'

export default {
  name: 'keyboard',
  components: {
    Key
  },
  data () {
    return {
      keys: keys
    }
  }
}
</script>
