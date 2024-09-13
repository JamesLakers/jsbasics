const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
]

// All movies in 2018 with rating > 4
// Sort by rating in decending order
// Display on the title

const highRatedMovies = movies
    .filter(movie => movie.year == 2018 && movie.rating > 4)
    .sort((a, b) => a.rating - b.rating).reverse()
    .map(move => move.title);
//a = 4.5
//b = 4
//0.5 => a > b

console.log(highRatedMovies); //[ 'b', 'a' ]
