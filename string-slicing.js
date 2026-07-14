// string slicing = creating a substring from a portion of another string; string.slice(start, end)

const fullName = "Bro Code";

let firstName = firstName.slice(0, fullName.indexOf(" ")); //returns Bro since it ends at the white space
let lastName = lastName.slice(4); // returns code as the last name

console.log(firstName);
console.log(lastName);
