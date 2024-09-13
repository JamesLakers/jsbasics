//Count the number of occurrences of a certain number in the array
const numbers = [1, 2, 3, 4, 2]; 

const count = countOccurrences(numbers, 2); 

console.log(count); //2

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}