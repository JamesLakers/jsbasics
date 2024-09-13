//Create new array that does not include values specified
const numbers = [1, 2, 3, 4]; 

const output = except(numbers, [1, 2]);

console.log(output); //[ 3, 4 ]

function except(array, excluded) {
  const output = []; 
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element); 
  return output; 
}