parser grammar EmojiScriptParser;

options {tokenVocab = EmojiScriptLexer;}

expr: term+;

term: INTEGER;

//addition: PLUS;


