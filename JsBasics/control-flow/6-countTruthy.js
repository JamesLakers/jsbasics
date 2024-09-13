//Falsey types in array and count Truthy
const array = [0, 1, null, undefined, false, NaN, '', 2, 3];

console.log(countTruthy(array)); //3

function countTruthy(array) {
  let count = 0; 
  for (let value of array) 
    if (value)
      count++;
  return count; 
}
