//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const now = new Date();
const dateOne = new Date('September 10 2024 06:00');
const dateTwo = new Date(2024, 9, 10, 6);

console.log(now); //Tue Sep 10 2024 06:00:40 GMT-0400 (Eastern Daylight Time)
console.log(dateOne); //Thu Oct 10 2024 06:00:00 GMT-0400 (Eastern Daylight Time)
console.log(dateTwo); //Thu Oct 10 2024 06:00:00 GMT-0400 (Eastern Daylight Time)

now.setFullYear(2023)
console.log(now.getFullYear()); //2023

console.log(now.toDateString()); //Sun Sep 10 2023
console.log(now.toTimeString()); //13:09:20 GMT-0400 (Eastern Daylight Time)
console.log(now.toISOString()); //2023-09-10T17:09:20.027Z
