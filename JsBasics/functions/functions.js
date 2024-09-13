
walk(); //Hoisting process of moving function delcartions to the top of the file

//Function Declaration
function walk()
{
    console.log('walk');
}

//Function Expression
const run = function(){
    console.log('run');
};

run();

let move = run;
move();


function sum(){
    let total  = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5));

//Rest operator always puts parameters into Array
//Rest operator (shopping cart example products in cart with applied discount)
function sum(discount, ...prices){
    const total = prices.reduce((a, b) => a + b); //combine shoping cart items

    return total * (1 - discount); //calculated discount applied
}
console.log(sum(0.1, 20, 30)); //45


//Default parameters
function interestRateCalculate(princple, rate = 3.5, years = 5){

    return princple * rate / 100 * years;
}
console.log(interestRateCalculate(10000)); //1750


//Try catch example with error handling
const person = { 
    firstName: 'James',
    lastName: 'Logan',
    get fullName(){ 
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value must be a string');

        const name = value.split(' ');
        if(name.length !== 2)
            throw new Error('Please enter first and last name');

        this.firstName = name[0];
        this.lastName = name[1];
    }
}

try {
    person.fullName = 'Kobe Bryant';
}
catch (error) {
    //alert(error);
}
console.log(person); //{ firstName: 'Kobe', lastName: 'Bryant', fullName: [Getter/Setter] }


//var => function scoped, also used in window object
//let and const => block scoped, not part of window object

//this keyword 
//method -> object
//function -> global (window, global)

const video = {
    title: 'Lakers highlights',
    play(){
        console.log(this);
    }
}

//this method example
video.play(); //{ title: 'Lakers highlights', play: [Function: play] }

video.stop = function stop(){
    console.log(this);
}

//this method example
video.stop(); //{ title: 'Lakers highlights', play: [Function: play], stop: [Function: stop] }


function Video(title){
    this.title = title
    console.log(this);
}

//using new will create empty object {}
const clip = new Video('snippet'); //Video { title: 'snippet' }

//this global exaple
const videoClip = {
    title: 'Basketball highlights',
    tags: ['nba', 'wnba', 'ncaa'],
    showTags(){
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
}

videoClip.showTags();
//Basketball highlights nba
//Basketball highlights wnba
//Basketball highlights ncaa


//replacing this 
function playVideo(a, b){
    console.log(this);
}

playVideo.call({ name: 'Kobe' }, 1, 2); //{ name: 'Kobe' }
playVideo.apply({ name: 'Kobe' }, [1, 2]); //{ name: 'Kobe' }
playVideo.bind({ name: 'Kobe' })(); //{ name: 'Kobe' }

playVideo(); //returns Windows object that includes Video object