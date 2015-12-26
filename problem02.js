var answer2 = 0;
var n1 = 0;
var n2 = 1;
var evenNumbers = [];
while(n1<4000000) {
    if(n1%2 === 0){
        answer2 += n1;
        evenNumbers.push(n1);
    }
    var n3 = n1+n2;
    n1 = n2;
    n2 = n3;
}

console.log("By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.");
console.log("The even valued terms are " + evenNumbers);
console.log("The sum is " + answer2);