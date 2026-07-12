// const = are variables that cant be changed
const PI = 3.148;
let radius;
let circumference;

radius = window.prompt("Enter radius of circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);

document.getElementById("sub").onclick = function () {
  radius = document.getElemntById("rad").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("h1").textContent = cicurmference + "cm";
};
