  var answer1 = 0;
  for(var i = 0; i<1000; i++) {
      if(i%3 === 0 || i%5 === 0) {
          answer1+=i;
      }
  }
  console.log("What is the sum of all the multiples of 3 or 5 below 100 ?");
  console.log("The answer is " + answer1);