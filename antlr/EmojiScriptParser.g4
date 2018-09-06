parser grammar EmojiScriptParser;


expr: expr (addition) expr
    | expr;

addition: '➕'
