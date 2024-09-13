//sum of all items in argument array
console.log(sum([1, 2, 3, 4])); //10

//spread operator creates array of arguments
function sum(...items) { 
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]]; //assign first item to remove outer array created by spread operator

  return items.reduce((a, b) => a + b);
}