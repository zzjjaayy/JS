// Variables
// JS is case sensitive {camelCase is recommended}

// variables being declared and assigned in the same line.
var x = 5;

// variables being assigned later.
var y; // value is "undefined"
y = 6;

// variables can even be reassigned
var z = 8;

// Strings
z = "jjj"

// Concatenation of Strings
var str1 = "i come last," + " always";
// the assignment addition can also be used to concatenate
str1 += " Awww!";
// if a number is added to a String, the number will be considered as a String
var str2 = "123" + 4 + 5 + 6; // should store "123456" as a String.

// length of a String
str2.length; // returns a number that is the length of the String

// getting characters of a String
var character = str[0]; // will store the first char of str2 in character.

// String are immutable, that is the characters cannot be changed
// Strings can still be replaced by a new one in variables.
