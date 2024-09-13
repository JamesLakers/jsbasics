//Get the max number from an array
const max = getMax([1,2,7,8,3,6]);

console.log(max); //8

function getMax(array) { 
  if (array.length === 0) return undefined; 

  // let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max; 

  return array.reduce((a, b) => (a > b) ? a : b);
}
