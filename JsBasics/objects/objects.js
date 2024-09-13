//Factory function
function createCircle(radius){
    return {
        radius, draw(){
            console.log('draw')
        }
    }
}

const cirle1 = createCircle(1);
console.log(cirle1) //{ radius: 1, draw: [Function: draw] }

const cirle2 = createCircle(2);
console.log(cirle2) //{ radius: 2, draw: [Function: draw] }


//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
Circle.call({}, 1);
Circle.apply({}, [1]);


//Primatives are copied by Value 
let number = 10;
function increaseNumber(){
    number++;
}

increaseNumber(number);
console.log(number); //10

//Objects are copied by Reference
let obj = {value: 10};
function increaseNumber(obj){
    obj.value++;
}

increaseNumber(obj);
console.log(obj); //{ value: 11 }


//Iterate thru an object with for in and for of
const circleObject = {
    radius: 1,
    draw (){
        console.log('draw');
    }
};

for(let key in circleObject)
    console.log(key, circleObject[key]); //properties of object and value returned
//radius 1
//draw [Function: draw]

for(let key of Object.keys(circleObject))  //properties returned
    console.log(key);
// radius
// draw    

for(let entry of Object.entries(circleObject))  //string array returned
console.log(entry);
// [ 'radius', 1 ]
// [ 'draw', [Function: draw] ]

if('radius' in circleObject) 
    console.log('yes property exists') //property or method exists in an object
//yes property exists



//Copy an object
const copyObject = {
    radius: 1,
    draw (){
        console.log('draw');
    }
};

const another = Object.assign({
    color: 'yellow'
}, copyObject);

const anotherWay = { ...copyObject } //spread operator copy 

console.log(copyObject); //{ radius: 1, draw: [Function: draw] }
console.log(another); //{ color: 'yellow', radius: 1, draw: [Function: draw] }
console.log(anotherWay); //{ radius: 1, draw: [Function: draw] }