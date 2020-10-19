
// About JS -
// It is not a purely object oriented language.
// It is a interpreted language and not compiled.

// COMMENTS

// in-line comments
/* this is a 
multi-line comment*/

// It is highly recommended to end each statement with semi-colon but not compulsory.
// Js ignores white spaces in statements, so spaces can be given to increase 
// readability. Usually developers prefer to give spaces and hop to the next 
// line around operators.


// Console.log
console.log("jay"); // prints the value in the browser console, usually used for 
                    // debugging and logging different values.

// ESCAPE characters

// 1. COMMAS INSIDE THE STRING
// using quotes inside a string
var str = "he said \"I will complete it tomorrow\"";

// the other way is to use different quotes inside and 
// the ones enclosing it.
var str2 = 'he said "I will complete it tomorrow"';

// another way is to use back ticks before enclosing commas
var str3 = `' he said "I will complete 'it' tomorrow" '`;
// now both single and double quotes can be used inside the String.

// 2. BACKSLASH INSIDE THE STRING
// use double backslashes
var str4 = "jay is \\amazing"; // this will show one backslash before "amazing".

// 3. NEW LINE
var str5 = "jay is \n great"; // will print "great" in a new line.

// 4. TAB IN LINE
var str6 = "jay\tgreat";