//Алгоритм Евклида
function findNodEuclid(number1, number2) {
  while(number1 !== number2) {
      if(number1 > number2) {
          number1 = number1 - number2;
      } else {
          number2 = number2 - number1;
      }
  }
  return number1;
}

function findNodEuclid2(number1, number2) {
    while(number1 !== 0 && number2 !== 0) {
        if(number1 > number2) {
            number1 = number1 % number2;
        } else {
            number2 = number2 % number1;
        }
    }
    return number1;
}

function findNodEuclid2Rec(number1, number2) {
    if(number2 === 0) {return number1;}
    return findNodEuclid2Rec(number2, number1 % number2);
}
const nod =  findNodEuclid(125, 5);
const nod2 =  findNodEuclid2(1234567890, 12);
const nod22 =  findNodEuclid2Rec(1234567890, 12);
const nod3 =  findNodEuclid(111, 32);
console.log(nod);
console.log(nod2);
console.log(nod22);
console.log(nod3);


// Алгоритм быстрого возведения в степень
// base ** power === p(1) * (base ** power)
function pow(base, power) {
    let p = 1;
    while(power > 1) {
        if(power % 2 === 0) {
            power /= 2;
            base *= base;
        } else {
            power -= 1;
            p = p * base;
        }
    }
    return p * base;
}

console.log('степень', pow(2,10));

function isPrimeNumber(number) {
    if(number < 2) {return false;}
    if(number === 2) {return true;}
    if(number % 2 === 0) {return false;}

    for(let index = 3; index * index <= number; index += 2) {
        if(number % index === 0) {
            return false;
        }
    }
    return true;
}

function isPrimeNumber2(number) {
    if(number < 2) {return false;}
    if(number === 2) {return true;}
    if(number % 2 === 0) {return false;}

    let index = 3;
    while(index * index <= number) {
        if(number % index === 0) {
            return false;
        }
        index += 2;
    }
    return true;
}

const primeArray = [2];
let primesNumber = 1;
const limit = 100;


let p = 3;

while(primesNumber < limit) {
    let prime = true;
    for(let index = 0; prime && index < primesNumber; index++) {
        let d = primeArray[index];
        if(d * d > p) { break; }
        if(p % d === 0) { prime = false; }
    }
    if(prime) {
        primeArray[primesNumber] = p;
        primesNumber++;
    }
    p += 2;
}

console.log(`${limit} простых чисел`, primeArray);



primesNumber = 1;

for(let p = 2; p <= limit; p++) {
    if(isPrimeNumber(p)) {
        primeArray.push(p);
        primesNumber++;
    }
}

console.log('Кол-во простых чисел', primesNumber);


function factorization(number) {
    const factorizationArray = [];
    for(let index = 2; index <= number; index++) {
        let loop = true;
        while(loop) {
            if(isPrimeNumber(index) && number % index === 0) {
                factorizationArray.push(index);
                number /= index;
            } else {
                loop = false;
            }
        }
    }
    return factorizationArray;
}

console.log('factorization', factorization(4294967297).join(', '));



function fibonacci(n) {
    if(n < 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function fibonacci2(n) {
    let a = 1;
    let b = 1;
    let res = 0;
    for(let index = 2; index<=n; index++) {
        res = a + b;
        a = b;
        b = res;
    }
    return res;
}

console.log(fibonacci(15));
console.log(fibonacci2(15));
