// string methods are functions that allow you manipulate and work with text (strings)

let username = "BroCode";

//getting character of a string @ using the charAt() method

console.log(userName.charAt(0)); //returns B

//getting the index of the occurence of a character in a string using indexOf() method

console.log(userName.indexOf("o")); //returns 2

console.log(userName.lastindexOf("o")); //returns 4

//getting the length of a string

console.log(userName.length);

//triming a string

console.log(userName.trim());

//changing the letter case of a string

console.log(userName.toUpperCase());

console.log(userName.toLowerCase());

//causing a repeat use repeat()

console.log(userName.repeat());

//check whether a string starts with something.

let result = userName.startsWith(" "); // .endWith()
console.log(result);

let show = userName.includes(" "); // .endWith()
console.log(show);

//changing characters
let phoneNumber = "12-34-56-23";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

//adding characters to a string to a certain valuelength
let phoneNumber = "12-34-56-23";
phoneNumber = phoneNumber.padStart(15, "0"); // adds to front of string the value 0 till the string reaches a maximum length of 15
console.log(phoneNumber);

let phoneNumber = "12-34-56-23";
phoneNumber = phoneNumber.padEnd(20, "0"); // adds to the end of string the value 0 till the string reaches a maximum length of 15
console.log(phoneNumber);
