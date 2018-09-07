// Generated from EmojiScriptLexer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004Z\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0006\u0002\u001f",
    "\n\u0002\r\u0002\u000e\u0002 \u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003-\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0002",
    "\u000f\u0003\u0003\u0005\u0004\u0007\u0002\t\u0002\u000b\u0002\r\u0002",
    "\u000f\u0002\u0011\u0002\u0013\u0002\u0015\u0002\u0017\u0002\u0019\u0002",
    "\u001b\u0002\u0003\u0002\u0002\u0002X\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0003\u001e\u0003\u0002\u0002",
    "\u0002\u0005,\u0003\u0002\u0002\u0002\u0007.\u0003\u0002\u0002\u0002",
    "\t2\u0003\u0002\u0002\u0002\u000b6\u0003\u0002\u0002\u0002\r:\u0003",
    "\u0002\u0002\u0002\u000f>\u0003\u0002\u0002\u0002\u0011B\u0003\u0002",
    "\u0002\u0002\u0013F\u0003\u0002\u0002\u0002\u0015J\u0003\u0002\u0002",
    "\u0002\u0017N\u0003\u0002\u0002\u0002\u0019R\u0003\u0002\u0002\u0002",
    "\u001bV\u0003\u0002\u0002\u0002\u001d\u001f\u0005\u0005\u0003\u0002",
    "\u001e\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002",
    " \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\u0004\u0003",
    "\u0002\u0002\u0002\"-\u0005\t\u0005\u0002#-\u0005\u000b\u0006\u0002",
    "$-\u0005\r\u0007\u0002%-\u0005\u000f\b\u0002&-\u0005\u0011\t\u0002\'",
    "-\u0005\u0013\n\u0002(-\u0005\u0015\u000b\u0002)-\u0005\u0017\f\u0002",
    "*-\u0005\u0019\r\u0002+-\u0005\u001b\u000e\u0002,\"\u0003\u0002\u0002",
    "\u0002,#\u0003\u0002\u0002\u0002,$\u0003\u0002\u0002\u0002,%\u0003\u0002",
    "\u0002\u0002,&\u0003\u0002\u0002\u0002,\'\u0003\u0002\u0002\u0002,(",
    "\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002",
    "\u0002,+\u0003\u0002\u0002\u0002-\u0006\u0003\u0002\u0002\u0002./\u0007",
    "\u00e4\u0002\u0002/0\u0007\u0180\u0002\u000201\u0007\u2024\u0002\u0002",
    "1\b\u0003\u0002\u0002\u000223\u00072\u0002\u000234\u0007\ufe11\u0002",
    "\u000245\u0007\u20e5\u0002\u00025\n\u0003\u0002\u0002\u000267\u0007",
    "3\u0002\u000278\u0007\ufe11\u0002\u000289\u0007\u20e5\u0002\u00029\f",
    "\u0003\u0002\u0002\u0002:;\u00074\u0002\u0002;<\u0007\ufe11\u0002\u0002",
    "<=\u0007\u20e5\u0002\u0002=\u000e\u0003\u0002\u0002\u0002>?\u00075\u0002",
    "\u0002?@\u0007\ufe11\u0002\u0002@A\u0007\u20e5\u0002\u0002A\u0010\u0003",
    "\u0002\u0002\u0002BC\u00076\u0002\u0002CD\u0007\ufe11\u0002\u0002DE",
    "\u0007\u20e5\u0002\u0002E\u0012\u0003\u0002\u0002\u0002FG\u00077\u0002",
    "\u0002GH\u0007\ufe11\u0002\u0002HI\u0007\u20e5\u0002\u0002I\u0014\u0003",
    "\u0002\u0002\u0002JK\u00078\u0002\u0002KL\u0007\ufe11\u0002\u0002LM",
    "\u0007\u20e5\u0002\u0002M\u0016\u0003\u0002\u0002\u0002NO\u00079\u0002",
    "\u0002OP\u0007\ufe11\u0002\u0002PQ\u0007\u20e5\u0002\u0002Q\u0018\u0003",
    "\u0002\u0002\u0002RS\u0007:\u0002\u0002ST\u0007\ufe11\u0002\u0002TU",
    "\u0007\u20e5\u0002\u0002U\u001a\u0003\u0002\u0002\u0002VW\u0007;\u0002",
    "\u0002WX\u0007\ufe11\u0002\u0002XY\u0007\u20e5\u0002\u0002Y\u001c\u0003",
    "\u0002\u0002\u0002\u0005\u0002 ,\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function EmojiScriptLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

EmojiScriptLexer.prototype = Object.create(antlr4.Lexer.prototype);
EmojiScriptLexer.prototype.constructor = EmojiScriptLexer;

Object.defineProperty(EmojiScriptLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

EmojiScriptLexer.EOF = antlr4.Token.EOF;
EmojiScriptLexer.INTEGER = 1;
EmojiScriptLexer.DIGIT = 2;

EmojiScriptLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

EmojiScriptLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

EmojiScriptLexer.prototype.literalNames = [  ];

EmojiScriptLexer.prototype.symbolicNames = [ null, "INTEGER", "DIGIT" ];

EmojiScriptLexer.prototype.ruleNames = [ "INTEGER", "DIGIT", "PLUS", "ZERO", 
                                         "ONE", "TWO", "THREE", "FOUR", 
                                         "FIVE", "SIX", "SEVEN", "EIGHT", 
                                         "NINE" ];

EmojiScriptLexer.prototype.grammarFileName = "EmojiScriptLexer.g4";



exports.EmojiScriptLexer = EmojiScriptLexer;

