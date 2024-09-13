//Prime numbers: whose factors are only 1 and itself
//Composit numbers: multiple factors

//Show all prime numbers up to a limit
showPrimes(10);
//2
//3
//5
//7

//isPrime(8); //false
//isPrime(13); //true

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) 
    if (isPrime(number)) console.log(number); 
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) 
    if (number % factor === 0)
    {
      //console.log(false);
      return false;
    }
  
    //console.log(true);
    return true;
}