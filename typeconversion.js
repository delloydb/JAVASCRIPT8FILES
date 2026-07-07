// type conversion = changing the datatype of a value to another(interger to string etc.)

let age = window.prompt("enter age");
age = Number(age);
age++;
console.log(age);

// example 2

let x = "string";
let y = 15;
let z = 12.4;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
