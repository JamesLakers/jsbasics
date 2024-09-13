//Count the occurences of number in array with error handling
try {
  const numbers = [1, 2, 3, 1, 4, 5, 1]; 
  const count = countOccurrences(numbers, 1); 
  console.log(count); //3
}
catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}