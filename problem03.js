var total = 600851475143;
var numbers = 1;
var primeFactors = [];
var primeTotals = 1;
while(primeTotals<total){
    numbers++;
    if(total%numbers === 0) {
        primeFactors.push(numbers);
        primeTotals *= numbers;
    }
}
console.log("What is the largest Prime factor of the number " + total + "?");
console.log("The prime factors are " + primeFactors);
console.log("The answer is " + primeFactors[primeFactors.length -1]);
