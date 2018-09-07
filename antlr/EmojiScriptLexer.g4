lexer grammar EmojiScriptLexer;



//Minus: '';
//Divide: '';
//Multiply: '';
INTEGER: DIGIT+;
DIGIT: ZERO | ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT | NINE;
// fragments
//fragment DIGIT: ('0'..'9');
fragment PLUS: '➕';

fragment ZERO: '\u{0030}''\u{FE0F}''\u{20E3}';
fragment ONE: '\u{0031}''\u{FE0F}''\u{20E3}';
fragment TWO: '\u{0032}''\u{FE0F}''\u{20E3}';
fragment THREE: '\u{0033}''\u{FE0F}''\u{20E3}';
fragment FOUR: '\u{0034}''\u{FE0F}''\u{20E3}';
fragment FIVE: '\u{0035}''\u{FE0F}''\u{20E3}';
fragment SIX: '\u{0036}''\u{FE0F}''\u{20E3}';
fragment SEVEN: '\u{0037}''\u{FE0F}''\u{20E3}';
fragment EIGHT: '\u{0038}''\u{FE0F}''\u{20E3}';
fragment NINE: '\u{0039}''\u{FE0F}''\u{20E3}';
