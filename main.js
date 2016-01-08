"use strict";

document.addEventListener('DOMContentLoaded', function(){

    var num1 = 0, num2 = 0, operator = "", total = 0, adjuster = "";
    var operating = false, calculated = false, lastClick = "";
    var outPut = document.getElementById("outPutDisplay");

//Event Listeners
    var numbers = document.getElementsByClassName("num");
    for(var i = 0 ; i < numbers.length ; i++){
        numbers[i].addEventListener("click", handleNumbers);
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


//other helper functions below

    function handleNumbers(event){
       var clickedNum = event.target.innerHTML;

       if (calculated === true && operating === false){
           outPut.innerHTML = "Press an operator to continue calculating"
        }
       else if (calculated === false && operating === false ){
            if (num1 === 0){
              num1 = clickedNum;
            } else {
              num1 += clickedNum;
            }
           outPut.innerHTML = num1;
         }
       else if (calculated === false && operating === true ){
            if (num2 === 0){
              num2 = clickedNum;
            } else {
              num2 += clickedNum;
            }
           outPut.innerHTML = num2;
       } else {
           outPut.innerHTML = "Error. Press '=' to continue, or Clear."
       }
     }


    function handleOperators(event) {
        if (operating === true && calculated === false) {
          outPut.innerHTML = "Invalid. Press '=' then operator";
        }
        else {
            if (calculated === true) {
              num1 = total;
              num2 = "";
              calculated = false;
            }
            operator = event.target.innerHTML;
            operating = true;
            outPut.innerHTML = operator;
          }
        }


    function calculateTotal(){
        num1 = parseFloat(num1), num2 = parseFloat(num2);
        if (num1 === NaN || num2 === NaN || operator === "") {
            outPut.innerHTML = "Please enter a valid operation";
            num1 = 0, num2 = 0, operator = "", total = 0;
        } else {
            switch(operator){
                case "/":
                    total = division(num1, num2);
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
              operating = false;
            }
          }


    function division(num1, num2){
        if (num2 === 0) {
          return "Not a number";
        }
        return num1 / num2;
    }


    function handleAdjusters(event){
        adjuster = event.target.innerHTML, num1 = parseFloat(num1), num2 = parseFloat(num2);
        var currentVal = outPut.innerHTML;

        if (parseFloat(currentVal) === NaN){
            outPut.innerHTML = "Invalid. Click '=' or C to continue";
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
                num1 = handleDecimal(String(num1));
                break;
                default:
                total = "Please enter a valid operation";
                reset();
              }
                outPut.innerHTML = num1;
        } else {
            switch(adjuster){
                case "+/-":
                num2 = String(num2 * -1);
                break;
                case "%":
                num2 = String(num2 / 100);
                break;
                case ".":
                num2 = handleDecimal(String(num2));
                break;
                default:
                total = "Please enter a valid operation";
                reset();
              }
                outPut.innerHTML = num2;
              }
            }


    function handleDecimal(number){
        if (number.indexOf(".") > -1){
           return number;
        } else {
          return number += "."
        }
    }


    function reset(){
      num1 = 0, num2 = 0, operator = "", total = 0, operating = false, calculated = false;
      outPut.innerHTML = "0";
    }

  })
