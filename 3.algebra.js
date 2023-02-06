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
