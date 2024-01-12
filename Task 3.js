function isPrime(num) {
    if ( num < 2) {
        return false;
    }

    for ( let i = 2; i * i <= num ; i++) {
        if (num % i === 0 ) {
            return false;
        }

    }

    return true;
}

function sumOfListPrime(x) {

    let sum = 0;

    for (let i = 2; i <= x; i++) {
        if (isPrime(i)) {
            sum = sum + 1;
        }
    }

    return sum;
}

let x = prompt("Please enter your x:");
let result = sumOfListPrime(x);

console.log("Total of prime numbers from 0 to x is " + result);