<template>
  <div>
    <h1 class="ui header">Emoji Script</h1>
    <div class="ui horizontal divider">Editor</div>
    <Editor/>
    <div class="ui horizontal divider">Controls</div>
    <button class="ui big button" @click="run">Run</button>
    <div class="ui horizontal divider">Keyboard</div>
    <Keyboard/>
    <div class="ui horizontal divider">Output</div>
    <div class="ui raised segment">
        <Output :value="results"/>
    </div>
  </div>
</template>

<script>
import Keyboard from './Keyboard'
import Editor from './Editor'
import Interpreter from '../interpreter/Interpreter'
import NewInterpreter from '../interpreter/NewInterpreter'
import Output from './Output'

export default {
  components: {
    Keyboard, Editor, Output
  },
  computed: {
    results () {
      return this.$store.state.result
    }
  },
  methods: {
    run () {
      // console.log(this.inter.pos)
      // console.log(this.inter.getNextToken())
      // let result = new Interpreter(this.$store.state.nodes).main()
      // this.$store.commit('setResult', result)
      new NewInterpreter().run()
      // (this.inter.getNextToken())
    }
  }
}
</script>
