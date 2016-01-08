"use strict";

document.addEventListener('DOMContentLoaded', function(){

    var num1 = 0, num2 = 0, operator = "", total = 0, operating = false, calculated = false, adjuster = "";
    var outPut = document.getElementById("outPutDisplay");

//Event Listeners
    var numbers = document.getElementsByClassName("num");
    for(var i = 0 ; i < numbers.length ; i++){
        numbers[i].addEventListener("click", handleNumbers)
        }

    var operators = document.getElementsByClassName("operator");
    for (var i = 0; i < operators.length; i++){
        operators[i].addEventListener("click", handleOperators);
    }

    var numAdjusters = document.getElementsByClassName("numAdjuster");
    for (var i = 0; i < numAdjusters.length; i++){
        numAdjusters[i].addEventListener("click", handleAdjusters);
    }

    document.getElementById("equals").addEventListener("click", calculateTotal);
    document.getElementById("reset").addEventListener("click", reset);


//other functions

    function handleNumbers(event){
       var clickedNum = event.target.innerHTML;
       if (operating === false ){
           num1 += clickedNum;
           outPut.innerHTML = num1;
         }
       else if (operating === true){
           num2 += clickedNum;
           outPut.innerHTML = num2;
       } else {
           outPut.innerHTML = "Error."
       }
     }


    function handleOperators(event) {
      if (calculated === true) {
          num1 = total;
          num2 = "";
          operator = event.target.innerHTML;
          outPut.innerHTML = operator;
          operating = true, calculated = false;
        }
        else if (operating === true) {
          outPut.innerHTML = "invalid value";
        } else {
        operator = event.target.innerHTML;
        operating = true;
        outPut.innerHTML = operator;
      }
    }

    //
    //
    // function handleOperators(event) {
    //     if (operating === true) {
    //       outPut.innerHTML = "invalid value";
    //     }
    //     else {
    //         if (calculated === true) {
    //           num1 = total;
    //           num2 = "";
    //           calculated = false;
    //         }
    //         operator = event.target.innerHTML;
    //         operating = true;
    //         outPut.innerHTML = operator;
    //       }
    //     }


    function calculateTotal(){
        num1 = parseFloat(num1), num2 = parseFloat(num2);
        if (num1 === NaN || num2 === NaN || operator === "") {
            outPut.innerHTML = "Please enter a valid operation";
            reset();
        } else {
            switch(operator){
                case "/":
                    total = num1 / num2;
                    break;
                case "x":
                    total = num1 * num2;
                    break;
                case "-":
                    total = num1 - num2;
                    break;
                case "+":
                    total = num1 + num2;
                    break;
                default:
                    total = "Please enter a valid operation";
                    reset();
              }
              outPut.innerHTML = total;
              calculated = true;
            }
          }


    function handleAdjusters(event){
        adjuster = event.target.innerHTML, num1 = parseFloat(num1), num2 = parseFloat(num2);
        var currentVal = outPut.innerHTML;

        if (parseFloat(currentVal) === NaN){
            outPut.innerHTML = "Not a valid entry";
            reset();
            return;
        }
        if (operating === false){
            switch(adjuster){
                case "+/-":
                num1 = String(num1 * -1);
                break;
                case "%":
                num1 = String(num1 / 100);
                break;
                case ".":
                num1 += ".";
                break;
                default:
                total = "Please enter a valid operation";
                reset();
              }
                outPut.innerHTML = num1;
        } else {
            switch(adjuster){
                case "+/-":
                num2 = num2 * -1;
                break;
                case "%":
                num2 = num2 / 100;
                break;
                case ".":
                num2 += ".";
                break;
                default:
                total = "Please enter a valid operation";
                reset();
              }
                outPut.innerHTML = num2;
              }
            }


    function reset(){
      num1 = 0, num2 = 0, operator = "", total = 0, operating = false, calculated = false;
      outPut.innerHTML = "0";
    }

  })
