//Create function to check if element is included in array
const numbers = [1, 2, 3, 4]; 

console.log(includes(numbers, 1)); //true

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}
