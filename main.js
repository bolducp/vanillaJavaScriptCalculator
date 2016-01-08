"use strict";

document.addEventListener('DOMContentLoaded', function(){

    var num1 = "", num2 = "", operator = "", total = 0, operating = false, calculated = false;
    var outPut = document.getElementById("outPutDisplay");

    var numbers = document.getElementsByClassName("num");
    for(var i = 0 ; i < numbers.length ; i++){
        numbers[i].addEventListener("click", function(event){
            var clickedNum = event.target.innerHTML;
            console.log("num clicked", clickedNum);

            if (operating === false ){
                console.log("num1", num1);
                num1 += clickedNum;
                outPut.innerHTML = num1;
              }

            else if (operating === true){
                console.log("num2", num2);
                num2 += clickedNum;
                outPut.innerHTML = num2;
            } else {
                outPut.innerHTML = "Error."
            }
          })
        }


    var operators = document.getElementsByClassName("operator");

    for (var i = 0; i < operators.length; i++){
        operators[i].addEventListener("click", function(event) {

          if (calculated === true) {
              console.log("second calculation")
              num1 = total;
              num2 = "";
              operator = event.target.innerHTML;
              outPut.innerHTML = operator;
              operating = true;
              calculated = false;
              console.log("num1: ", num1,"num2: ", num2, "operator: ", operator, "total: ", total, "operating", operating)

          }
            else if (operating === true) {
              outPut.innerHTML = "invalid value";
            } else {
            operator = event.target.innerHTML;
            operating = true;
            console.log("operator clicked", operator);
            outPut.innerHTML = operator;
          }
        });
      }

    document.getElementById("equals").addEventListener("click", calculateTotal);
    document.getElementById("reset").addEventListener("click", reset);





//event listeners here

function calculateTotal(){
    num1 = parseFloat(num1), num2 = parseFloat(num2);
    if (num1 === NaN || num2 === NaN || operator === "") {
        outPut.innerHTML = "Please enter a legit operation";
        resetValues();
        console.log("num1: ", num1,"num2: ", num2, "operator: ", operator, "total: ", total)
      } else {
          switch(operator){
              case "/":
                  total = num1 / num2;
                  console.log("total", total)
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
                  total = "Please enter a legit operation";
                  reset();
                  console.log("num1: ", num1,"num2: ", num2, "operator: ", operator, "total: ", total)

          }
          outPut.innerHTML = total;
          calculated = true;
        }
      }

function reset(){
  num1 = "", num2 = "", operator = "", total = 0, operating = false, calculated = false;
  outPut.innerHTML = "0";
}

})
