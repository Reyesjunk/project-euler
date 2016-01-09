$(document).ready(function(){
  $('pre').hide();

  /*Adds effect to 'solve'button*/
  $('.solve').hover(
    function(){
      $(this).addClass('hover');
  },
    function(){
      $(this).removeClass('hover');
    }
  );
  
  /*This solves problem 1*/
  $('#solve1').click(function(){
    $('#answer1 div').remove();
    var value = $('#problem1').val();
    $('#answer1').append('<div id="answers">'+multiplesOf3and5(value)+'</div>');
    displayCode(1,value);
    });
  /*This solves problem 2*/
  $('#solve2').click(function(){
    $('#answer2 div').remove();//removes any appended text
    var value = $('#problem2').val();
     $('#answer2').append('<div id="answers">'+evenFibonacci(value)+'</div>');
    displayCode(2,value);
  });
  /*This solves problem 3*/
  $('#solve3').click(function(){
    $('#answer3 div').remove();
    var value = $('#problem3').val();
    $('#answer3').append('<div id="answers">'+primeFactors(value)+'</div>');
        /*This prints out the code*/
    displayCode(3,value);
  });
});

  /*This function displays the code*/
  function displayCode(pNum,target){
    $('pre').html(selectCodeText(pNum,target));
    $('pre').prepend("<h1>Code</h1>");
    $('pre').slideDown("slow");
  }


  /*This function selects the text that will appear in the Code section*/
  function selectCodeText(pNum, pValue){
    var code = ""; 
    switch(pNum){
      case 1:
        code = "var answer1 = 0;\nfor(var i = 0; i<"+pValue+"; i++) {\n        if(i%3 === 0 || i%5 === 0) {\n            answer1+=i;\n        }\n }\n return answer1;";
        return code;
        break;
      case 2:
        code = "var answer2 = 0;\nvar n1 = 0;\nvar n2 = 1;\nvar evenNumbers = [];\nwhile(n1<"+pValue+") {\n        if(n1%2 === 0){\n            answer2 += n1;\n            evenNumbers.push(n1);\n        }\n        var n3 = n1+n2;\n        n1 = n2;\n        n2 = n3;\n}\nreturn answer2;";
          return code;
        break;
      case 3:
        code = "var numbers = 1;\nvar primeFactors = [];\nvar primeTotals = 1;\nvar answer3 = 0;\n        while(primeTotals<"+pValue+"){\n            numbers++;\n            if("+pValue+"%numbers === 0) {\n                primeFactors.push(numbers);\n                primeTotals *= numbers;\n        }\n}\nvar answer3 = primeFactors[primeFactors.length -1];\nreturn answer3;";
        return code;
        break;
    }
  }

/*Solutions*/
function multiplesOf3and5(number){
  var answer = 1;
  var multiples = [];
  for(var i = 0; i<number; i++) {
     if(i%3 === 0 || i%5 === 0) {
      answer+=i;
     }
  }
  return answer;
}

  function evenFibonacci(input) {
    var answer2 = 0;
    var n1 = 0;
    var n2 = 1;
    var evenNumbers = [];
    while(n1<input) {
        if(n1%2 === 0){
            answer2 += n1;
            evenNumbers.push(n1);
        }
    var n3 = n1+n2;
    n1 = n2;
    n2 = n3;
    }
    return answer2;
}
  function primeFactors(input){
    var numbers = 1;
    var primeFactors = [];
    var primeTotals = 1;
    while(primeTotals<input){
        numbers++;
        if(input%numbers === 0) {
            primeFactors.push(numbers);
            primeTotals *= numbers;
        }
    }
    return primeFactors[primeFactors.length -1];
  }