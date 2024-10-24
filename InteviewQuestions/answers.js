//DOM - Document Object Model is a programming interface for HTML and XML documents
//When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. 
//Using this DOM, we can manipulate or change various elements inside the HTML document.

//BOM - Browser Object Model allows users to interact with the browser. 
//All of the window's functions directly or by referencing the window.

//Async - Await
//The async function declaration creates a binding of a new async function to a given name. 
//The await keyword is permitted within the function body, enabling asynchronous and avoiding the need to explicitly configure promise chains

//Primitive types
typeof "John Doe" // "string"
typeof 3.14 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" (kind of a bug in JavaScript)

//Non-primitive types (To store multiple and complex values)
var obj = {
    x:  43,
    y:  "Hello world!",
    z: function(){
       return this.x;
       }
    }     
 var array = [5, "Hello", true, 4.1]; 


//What is hoisting?
//Hoisting is the default behaviour where all the variable and function declarations are moved on top.
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;


//Difference between == and === operators.
//Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.
var x = 2;
var y = "2";
console.log(x == y)  // true - since the value of both x and y is the same
console.log(x === y) // false - since the typeof x is "number" and typeof y is "string"


//Difference between var and let keyword 
//Variables declared by let are only available inside the block where they’re defined
//Variables declared by var are available throughout the function in which they’re declared


//Implicit Type Coercion
var x = 3;
var y = "3";
console.log(x + y); // "33" 

var first = "Lebron";
var last = " James";
console.log(first + last) // "Lebron James" 


//The "this" keyword refers to the object that the function is a property of.
//The value of the "this" keyword will always depend on the object that is invoking the function
var nbaObject = {
    name:  "NBA",
    getName: function(){
    console.log(this.name);
  }
}   
nbaObject.getName(); //NBA

  
//Arrow Function Expression
var arrowAdd = (a,b) => a + b;

//Traditional Function Expression
var add = function(a,b){
    return a + b;
};


//Turn an Object into an Array
let objSplit = { id: "1", username: "JamesL", password: "lakers" };

//keys to array using - Object.keys()
console.log(Object.keys(objSplit)); //[ 'id', 'username', 'password' ]

//values to array using - Object.values()
console.log(Object.values(objSplit)); //[ '1', 'JamesL', 'lakers' ]

//keys and values using - Object.entries()
console.log(Object.entries(objSplit)); //[ [ 'id', '1' ], [ 'username', 'JamesL' ], [ 'password', 'lakers' ] ]


//count the number of vowels function
const findVowels = (text) => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of text.toLowerCase()) {
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
  }
console.log(findVowels('james'));



//combine two name arrays to output fullname
const firstNames = ['John', 'Jane', 'Magic'];
const lastNames = ['Doe', 'Smith', 'Johnson'];

function combineNames(firstNames, lastNames) {
    // Ensure both arrays are of the same length
    if (firstNames.length !== lastNames.length) {
        throw new Error("First names and last names arrays must have the same length");
    }
    // Create an array of full names by combining first and last names
    const fullNames = firstNames.map((firstName, index) => {
        return `${firstName} ${lastNames[index]}`;
    });

    return fullNames;
}
const fullNames = combineNames(firstNames, lastNames);
console.log(fullNames); // ['John Doe', 'Jane Smith', 'Magic Johnson']


//Filter for even and odd numbers
const list = [1, 2, 3, 4, 5, 6, 7];

const evens = list.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

const odds = list.filter(num => num % 2 !== 0);
console.log(odds); // [ 1, 3, 5, 7 ]



