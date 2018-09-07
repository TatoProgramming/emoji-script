var antlr4 = require('antlr4/index')

function EmojiListener() {
  antlr4.tree.ParseTreeListener.call(this)
  return this;
}

EmojiListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype)
EmojiListener.prototype.constructor = EmojiListener
EmojiListener.prototype.enterExpr = function (ctx) {
}
EmojiListener.prototype.exitExpr = function(ctx) {

}

exports.EmojiListener =  EmojiListener

