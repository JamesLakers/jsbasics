//Arithmic Operators
let x = 1;
console.log(x + 0);
console.log(x - 0);
console.log(x * 0);
console.log(x / 0);
console.log(x % 0); //Remainder
console.log(x ** 0); //Remainder

//Increment(++)
console.log(x++);
console.log(++x);
//Decrement(--)
console.log(--x);

//Comparison Operators

//Relational
console.log(x > 0);
console.log(x >= 0);
console.log(x < 1);
console.log(x <= 1);
//Strict Equality(same type and value)
console.log(x === 1);
console.log(x !== 1);
//Loose Equality(value only - will convert right side value to left value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

//Ternary Operators
//If a customer over 100 points is gold member otherwise is silver
let points = 110;
let type = points > 100 ? 'gold' : 'silver'
console.log(type); //gold

//Logical Operators 
// AND (&&)
// OR (||) 
// NOT (!)

//Falsy (undefined, null, 0, false, '', NaN)

//Anything not Falsy -> Truthy

//Short circuiting
// false || 1 || 2
// 1 is returned because stops after first Truthy
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //blue

//Bitwise Operator(mostly used for permissions)
// 00000100 Read
// 00000010 Write
// 00000001 Execute

const readPermissions = 4;
const writePermissions = 2;
const executePermissions = 1;

let myPermssion = 0;
myPermssion = myPermssion | writePermissions;
let message = (myPermssion & readPermissions) ? 'yes' : 'no';
console.log(message); //no

//Swapping variable values example
let firstColor = 'red';
let secondColor = 'blue';
let swap = firstColor;
firstColor = secondColor;
secondColor = swap;
console.log(secondColor); //red