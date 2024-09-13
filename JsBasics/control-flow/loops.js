
for (let i = 1; i <= 3; i++)
{
    if(1 % 2 != 0 ) //find all odd numbers
    console.log('for loop ' + i);
    //for loop 1
    //for loop 2
    //for loop 3
}


for (let i = 3; i >= 1; i--)
{
    if(1 % 2 != 0 ) //find all odd numbers
    console.log('for loop reverse ' + i);
    //for loop reverse 3
    //for loop reverse 2
    //for loop reverse 1
}

let i = 1;
while (i <= 3) {
    if(1 % 2 != 0 ) //find all odd numbers
    console.log('while loop ' + i);
    i++;
    //while loop 1
    //while loop 2
    //while loop 3
}

let y = 0;
while (y <= 10) {
    if (y === 3) break;
    console.log('while loop ' + y);
    y++;
    //while loop 0
    //while loop 1
    //while loop 2
}

let j = 1;
do {
    if(1 % 2 != 0 ) //find all odd numbers
    console.log('do while loop ' + j);
    j++;
}while (j <= 3);
//do while loop 1
//do while loop 2
//do while loop 3

const person = {
    firstName: 'James',
    id: 24
}

//for in: Iterates over property names (keys) of an object or the indices of an array.
for (const key in person) {
    console.log(key, person[key]); 
    //firstName James
    //id 24
}

const colors = ['red', 'green', 'blue']

for (let index in colors) {
    console.log(index, colors[index]);
    //0 red
    //1 green
    //2 blue
}

//for of: Iterates over the actual values of iterable objects like arrays, strings, etc.
for (let color of colors) {
    console.log(color);
    //red
    //green
    //blue
}