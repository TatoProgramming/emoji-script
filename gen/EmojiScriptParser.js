// Generated from EmojiScriptParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var EmojiScriptParserListener = require('./EmojiScriptParserListener').EmojiScriptParserListener;
var grammarFileName = "EmojiScriptParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002",
    "\u0004\u0006\u0002\u0002\u0002\r\u0002\b\u0003\u0002\u0002\u0002\u0004",
    "\f\u0003\u0002\u0002\u0002\u0006\u000e\u0003\u0002\u0002\u0002\b\t\u0005",
    "\u0004\u0003\u0002\t\n\u0005\u0006\u0004\u0002\n\u000b\u0005\u0004\u0003",
    "\u0002\u000b\u0003\u0003\u0002\u0002\u0002\f\r\u0007\u0004\u0002\u0002",
    "\r\u0005\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0003\u0002\u0002",
    "\u000f\u0007\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u00E2\u017E\u2022'" ];

var symbolicNames = [ null, "PLUS", "INTEGER", "DIGIT" ];

var ruleNames =  [ "expr", "term", "addition" ];

function EmojiScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

EmojiScriptParser.prototype = Object.create(antlr4.Parser.prototype);
EmojiScriptParser.prototype.constructor = EmojiScriptParser;

Object.defineProperty(EmojiScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

EmojiScriptParser.EOF = antlr4.Token.EOF;
EmojiScriptParser.PLUS = 1;
EmojiScriptParser.INTEGER = 2;
EmojiScriptParser.DIGIT = 3;

EmojiScriptParser.RULE_expr = 0;
EmojiScriptParser.RULE_term = 1;
EmojiScriptParser.RULE_addition = 2;

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EmojiScriptParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprContext.prototype.addition = function() {
    return this.getTypedRuleContext(AdditionContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof EmojiScriptParserListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof EmojiScriptParserListener ) {
        listener.exitExpr(this);
	}
};




EmojiScriptParser.ExprContext = ExprContext;

EmojiScriptParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, EmojiScriptParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.term();

        this.state = 7;
        this.addition();
        this.state = 8;
        this.term();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EmojiScriptParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.INTEGER = function() {
    return this.getToken(EmojiScriptParser.INTEGER, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof EmojiScriptParserListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof EmojiScriptParserListener ) {
        listener.exitTerm(this);
	}
};




EmojiScriptParser.TermContext = TermContext;

EmojiScriptParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, EmojiScriptParser.RULE_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(EmojiScriptParser.INTEGER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AdditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = EmojiScriptParser.RULE_addition;
    return this;
}

AdditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionContext.prototype.constructor = AdditionContext;

AdditionContext.prototype.PLUS = function() {
    return this.getToken(EmojiScriptParser.PLUS, 0);
};

AdditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof EmojiScriptParserListener ) {
        listener.enterAddition(this);
	}
};

AdditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof EmojiScriptParserListener ) {
        listener.exitAddition(this);
	}
};




EmojiScriptParser.AdditionContext = AdditionContext;

EmojiScriptParser.prototype.addition = function() {

    var localctx = new AdditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, EmojiScriptParser.RULE_addition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(EmojiScriptParser.PLUS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.EmojiScriptParser = EmojiScriptParser;
