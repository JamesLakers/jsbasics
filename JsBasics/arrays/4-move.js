//Move element in an array to requested position of the array 
const numbers = [1, 2, 3, 4, 1, 1]; 

const output = move(numbers, 1, 2);

console.log(output); //[ 1, 3, 4, 2, 1, 1 ] moved the indexed elemnt to requested position

function move(array, index, offset) { 
  const position = index + offset; //calcuate position where moving element too

  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return; 
  }
  
  const output = [...array]; //copy of original array
  const element = output.splice(index, 1)[0]; //get element from array want to move
  output.splice(position, 0, element); //add element to new position in array
  return output;
}