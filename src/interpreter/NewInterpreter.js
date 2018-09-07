
var antlr4 = require('antlr4')
var EmojiScriptLexer = require('../../gen/EmojiScriptLexer').EmojiScriptLexer
var EmojiScriptParser = require('../../gen/EmojiScriptParser').EmojiScriptParser
var EmojiListener = require('../../gen/EmojiListener').EmojiListener

class NewInterpreter {
  run() {
    let input = "1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣0️⃣"
    let chars = new antlr4.InputStream(input)
    let lexer = new EmojiScriptLexer(chars)
    let tokens = new antlr4.CommonTokenStream(lexer)
    let parser = new EmojiScriptParser(tokens)
    parser.buildParseTrees = true
    let tree = parser.expr()
    // let listener = new EmojiListener()
    // console.log(antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree))
    console.log(tree)
    console.log(tree.term(0).INTEGER().getText())

  }
}
export default NewInterpreter
