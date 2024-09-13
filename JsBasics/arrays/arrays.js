const number = [3,4];
//Add to end of array
number.push(5, 6);

//Add to beginnnig of array
number.unshift(1, 2);

//Add to position in array
number.splice(2, 0, 'a', 'b', 'c'); //optional inserts new elements
console.log(number); //[1,2,a,b,c,3,4,5,6]


//Find element primative
const numArray = [1, 2, 3, 1, 4]
console.log(numArray.indexOf(1, 2)); //3
console.log(numArray.lastIndexOf(1)); //3
console.log(numArray.includes(1)); //true

//Find element by reference
const courses = [
    {id:1, name: 'Class1'},
    {id:2, name: 'Class2'}
];

const course = courses.find(function(course)
{
    return course.name === 'Class1'; //returns first element that matches critera
});
const courseIndex = courses.findIndex(function(course) 
{
    return course.name === 'Class2';
});

console.log(course); //{ id: 1, name: 'Class1' }
console.log(courseIndex); //1


//Arrows functions
const courseArrow = courses.find(course => course.name === 'Class1');
console.log(courseArrow); //{ id: 1, name: 'Class1' }


//Remove elements from array
const removeArray = [1, 2, 3, 4];

//Remove from end of array
const last = removeArray.pop(); 
console.log(removeArray); //[ 1, 2, 3 ]
console.log(last); //4

//Remove from begininng of array
const first = removeArray.shift();
console.log(first); //1

//Remove from middle of array
const middle = removeArray.splice(2, 1); //starting index and number of element to remove
console.log(removeArray); //[ 2, 3 ]


//Empty array
let emptyArray = [1, 2, 3, 4];
let anotherArray = emptyArray;

emptyArray = []; //Empties the array but keeps references
console.log(emptyArray); //[]
console.log(anotherArray); //[1, 2, 3, 4]

emptyArray.length = 0; //Clears array and references
anotherArray = emptyArray;
console.log(emptyArray); //[]
console.log(anotherArray); //[]


//Combining arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const arryWithObject = [{id: 1}];

let combined = firstArray.concat(secondArray);
console.log(combined); //[ 1, 2, 3, 4, 5, 6 ]

let slice = combined.slice(2, 4); //start and end positions
console.log(slice); //[ 3 , 4, ]

let slice2 = combined.slice(2); //start position only
console.log(slice2); //[ 3 , 4, 5, 6 ]

let slice3 = combined.slice(); //no parameter makes copy of array
console.log(slice2); //[ 1, 2, 3 , 4, 5, 6 ]

let combinedWtihObject = arryWithObject.concat(secondArray);
combinedWtihObject[0].id = 10;
console.log(combinedWtihObject); //[ { id: 10 }, 4, 5, 6 ]


//Spread operator
let combineSpread = [...firstArray, ...secondArray];
console.log(combineSpread); //[ 1, 2, 3, 4, 5, 6 ]

let combineSpread2 = [...firstArray, 'a', ...secondArray, 'b'];
console.log(combineSpread2); //[ 1, 2, 3, 'a', 4, 5, 6, 'b' ]


//Iterating an array
const numbers = [1, 2, 3];

for(let number of numbers)
    console.log(number); 
//1 
//2 
//3

numbers.forEach((number, index) => console.log(index, number)); 
//0 1 
//1 2 
//2 3


//Joining arrays
let join = numbers.join(',');
console.log(join); //1,2,3

const message = 'Kobe scored 81 points';
const split = message.split(' ');
console.log(split); //[ 'Kobe', 'scored', '81', 'points' ]

const joinString = split.join('-');
console.log(joinString); //Kobe-scored-81-points



//Sorting array of numbers or strings
let arrayToSort = [2, 3, 1];
arrayToSort.sort();
console.log(arrayToSort); //[ 1, 2, 3 ]

arrayToSort.reverse();
console.log(arrayToSort); //[ 3, 2, 1 ]

//Sorting array of objects
const classes = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' }
];

classes.sort(function(obj1, obj2)
{
    if(obj1.name.toLowerCase() < obj2.name.toLowerCase()) return -1;
    if(obj1.name.toLowerCase() > obj2.name.toLowerCase()) return 1;
    return 0;
});

console.log(classes); 
//[ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ] //uppercase J
//[ { id: 1, name: 'Node.js' }, { id: 2, name: 'javaScript' } ] //lowercase j

//ASCII Table = https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html


//Testing elements of array
const numbersArray = [1, 2, -1, 3];

const positiveNumber = numbersArray.every(function(value)
{
    return value >= 0;
});

console.log(positiveNumber); //false

const atLeastOnePositiveNumber = numbersArray.some(function(value)
{
    return value > 0;
});

console.log(atLeastOnePositiveNumber); //true


//Filtering array
const numbersToFilter = [1, 2, -1, 3];

const filtered = numbersArray.filter(value => value > 0);
console.log(filtered); //[ 1, 2, 3 ]

//Mapping array
const numbersToMap = [1, 2, -1, 3];

//Mapping to string
const mappedString = filtered.map(number => '<li>' + number + '</li>');
console.log(mappedString); //[ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
const html = mappedString.join(''); //Removes defaulted comma seperators
console.log('<ul>' + html + '</ul>'); //<ul><li>1</li><li>2</li><li>3</li></ul>

//Mapping to object
const mappedObject = filtered.map(number => ({ value: number }));
console.log(mappedObject); //[ { value: 1 }, { value: 2 }, { value: 3 } ]

//Mapping to object with chaining methods
const clean = 
    numbersToFilter
        .filter(value => value > 0)
        .map(number => ({ value: number }))
        .filter(obj => obj.value > 1)
        .map(obj => obj.value);

console.log(clean); //[ 2, 3 ]


//Reducing an array
const numbersToReduce = [1, -1, 2, 3];

//Starts at first position of array or use index parameter in reduce method
//a = 1, c = -1 => 0
//a = 0, c = 2 => 2
//a = 2, c = 3 => 5
const sum = numbersToReduce.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

console.log(sum); //5