import Token from './Token'

class Interpreter {
  constructor (nodes) {
    this.nodes = nodes
    this.pos = 0
    this.currentToken = null
    this.size = 2
  }

  getNextToken () {
    let nodes = this.nodes

    if (this.pos > nodes.length - 1) { return new Token('EOF', null) }

    let currentChar = nodes[this.pos].value

    if (!isNaN(parseInt(currentChar))) {
      this.pos += 1
      return new Token('INTEGER', parseInt(currentChar))
    }

    if (currentChar === '+') {
      this.pos += 1
      return new Token('PLUS', currentChar)
    }

    throw new Error('Error Parsing Input')
  }

  eat (tokenName) {
    if (this.currentToken.type === tokenName) {
      this.currentToken = this.getNextToken()
    } else {
      throw new Error('Error Parsing Input')
    }
  }

  expr () {
    this.currentToken = this.getNextToken()
    let left = this.currentToken
    this.eat('INTEGER')
    let op = this.currentToken
    console.log(op)
    this.eat('PLUS')
    let right = this.currentToken
    this.eat('INTEGER')
    return left.value + right.value
  }

  main () {
    return this.expr()
  }
}

export default Interpreter
