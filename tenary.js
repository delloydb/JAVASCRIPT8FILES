// tenary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition
// example format - condition ? codeifTrue : codeifFalse

let age = 12;
let message = age >= 18 ? "you are an adult" : "you are a minor";
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

let isStudent = false;
let clearance = isStudent ? "Enter admission number" : "Enter ID number";
console.log(clearance);

let purchaseAmount = 999;
let discount = purchaseAmount >= 1000 ? 10 : 0;
console.log(discount);
