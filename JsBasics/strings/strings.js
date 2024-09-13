//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Special Characters:
//     \' : Single quote
//     \" : Double quote
//     \\ : Backslash
//     \n : Newline
//     \r : Carriage return
//     \t : Tab
//     \b : Backspace
//     \f : Form feed
//     \v : Vertical tab

//String primative
const message = ' Lakers\n \"win\" another championship '

console.log(message.length); //34
console.log(message[1]); //L
console.log(message.includes('win')); //true
console.log(message.startsWith('Lakers')); //true
console.log(message.endsWith('championship')); //true
console.log(message.indexOf('win')); //9
console.log(message.replace('championship', 'in season tournament')); // Lakers "win" another in season tournament
console.log(message); // Lakers "win" another championship
console.log(message.toUpperCase()); // LAKERS "WIN" ANOTHER CHAMPIONSHIP
console.log(message.toLowerCase()); // lakers "win" another championship
console.log(message.trim()); //Lakers "win" another championship
console.log(message.trimStart()); //Lakers "win" another championship
console.log(message.trimEnd());// Lakers "win" another championship
console.log(message.split(' ')); //[ '', 'Lakers\n', '"win"', 'another', 'championship', '' ]

//Template literals
const messageTwo = 
`Lakers "win" 
back to back 
championships`
console.log(messageTwo);
//Lakers "win"
//back to back
//championships

const nameOfPlayer = 'Lebron';
const messageThree =
`Hello ${nameOfPlayer},

Thank you for submitting your email we will reply soon

Regards,
LA Lakers`

console.log(messageThree);
//Hello Lebron,
//
//Thank you for submitting your email we will reply soon
//
//Regards,
//LA Lakers