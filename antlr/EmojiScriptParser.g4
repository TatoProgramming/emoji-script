parser grammar EmojiScriptParser;

options {tokenVocab = EmojiScriptLexer;}


expr: term (addition) term;

term: INTEGER;

addition: PLUS;


