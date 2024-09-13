let homeAddress = {
    street: '24 Crypto Area',
    city: 'Los Angeles',
    zip: '90210'
}

//Exercise 1 Display address object properties and values
function showAddress(address)
{
    for(let key in address)  
        console.log(key, address[key]); //properties of object and value
}

showAddress(homeAddress);
//street 24 Crypto Area
//city Los Angeles
//zip 90210


//Exercise 2 Factory function and Constructor
//Factory function
function createAddress(street, city, zip){
    return {
            street, city, zip
    } 
}

let printAddress = createAddress(homeAddress.street, homeAddress.city, homeAddress.zip);
console.log(printAddress); //{ street: '24 Crypto Area', city: 'Los Angeles', zip: '90210' }

//Constructor
function address(street, city, zip)
{
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let printConstructor = new address(homeAddress.street, homeAddress.city, homeAddress.zip)
console.log(printConstructor); //address { street: '24 Crypto Area', city: 'Los Angeles', zip: '90210' }


//Exercise 3 Object equality
let address1 = new address('a', 'b', 'c')
let address2 = new address('a', 'b', 'c')
let address3 = address1;

function areEqual(address1, address2)
{
   return address1.city === address2.city &&
            address1.street === address2.street &&
            address1.zip === address2.zip;
}

console.log(areEqual(address1, address2)); //true


function areSame(address1, address2)
{
    return address1 == address2;
}

console.log(areSame(address1, address2)); //false
console.log(areSame(address1, address3)); //true


//Exercise 4 Object post
let post = {
    title: 'Lakers win again',
    body: 'Lebron James has 4 rings can he get to 5 to match Kobe',
    author: 'Los Angles Lakers',
    views: '5,000,000',
    comments: [
        { author: 'NBA', body: 'We think he will' },
        { author: 'ESPN', body: 'No I do not think so' },
    ],
    isLive: true
}

console.log(post);


//Exercise 5 Constructor for Post
let newPost = {
    title: 'Lakers win again',
    body: 'Lebron James has 4 rings can he get to 5 to match Kobe',
    author: 'Los Angles Lakers',
}

function NewPost(title, body, author)
{
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = []
    this.isLive = false
}

console.log(newPost);
//{   title: 'Lakers win again',
//    body: 'Lebron James has 4 rings can he get to 5 to match Kobe',
//    author: 'Los Angles Lakers' }


//Exercise 6 Price rage objects
let priceRanges = [
    { label: '$', tootip: 'Inexpensive', min: 0, max: 10 },
    { label: '$$', tootip: 'Moderate', min: 11, max: 20 },
    { label: '$$$', tootip: 'Expensive', min: 21, max: 50 },
];

let resturants = [
    { name: 'Chickfila', averagePrice: 9 },
    { name: 'Flanigans', averagePrice: 15 },
]

console.log(priceRanges);
//[ { label: '$', tootip: 'Inexpensive', min: 0, max: 10 },
//  { label: '$$', tootip: 'Moderate', min: 11, max: 20 },
//  { label: '$$$', tootip: 'Expensive', min: 21, max: 50 } ]

console.log(resturants);
//[ { name: 'Chickfila', averagePrice: 9 },
//  { name: 'Flanigans', averagePrice: 15 } ]