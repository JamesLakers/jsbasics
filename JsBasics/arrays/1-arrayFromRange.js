//Create an array with numbers from the min to max
const numbers = arrayFromRange(1, 10);

console.log(numbers); //[ 1, 2, 3, 4,  5,  6, 7, 8, 9, 10 ]

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}