// logical operator = used to combine or manipulate boolean value
// they include
// 1. AND OPERATOR - &&
// 2. OR OPERATOR - ||
// 3. NOT OPERATOR - !

const temp = 20;

// without logical operators
if (temp > 0) {
  console.log("the weather is GOOD");
} else if (temp <= 30) {
  comsole.log("the weathr is HOT");
} else {
  console.log("the weather is BAD");
}

// with logical AND operator
if (temp > 0 && temp <= 30) {
  console.log("the weather is GOOD");
} else {
  console.log("the weather is BAD");
}

// with logical OR Operator
if (temp <= 0 || temp > 30) {
  console.log("the weather is BAD");
} else {
  console.log("the weather is GOOD");
}

//with NOT Operator

const IsSunny = true;

if (!isSunny) {
  console.log("its cloudy");
} else {
  console.log("its sunny");
}
