"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
// number.forEach(function(numero) {
//     numero.addEventListener('click', function() {
//         input.innerHTML += this.innerHTML;
//     });
// });
Array.from(number).map(numero => {
    numero.addEventListener('click', function() {
        let string = input.innerHTML;
        const lastChar = string[string.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += this.innerHTML;
        }
        else if (
            resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"
        )   {
                resultDisplayed = false;
                input.innerHTML += this.innerHTML;
            }
        else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += this.innerHTML;
        }
    })
});

// adding click handlers to the operation buttons
operator.forEach(function(math) {
    math.addEventListener('click', function() {
        let string = input.innerHTML;
        const lastChar = string[string.length - 1];
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            string = string.substring(0, (string.length - 1));
            input.innerHTML = string + this.innerHTML;
        }
        else {
            input.innerHTML += this.innerHTML;
        }
    });
});

// on click of 'equal' button
// Array.from(number).map(numero => {
//     numero.addEventListener('click', function() {
//         if (resultDisplayed === false) {
//             input.innerHTML += this.innerHTML;
//         }
//         else if ((resultDisplayed === true && lastChar === "+") ||
//                 (resultDisplayed === true && lastChar === "-") ||
//                 (resultDisplayed === true && lastChar === "*") ||
//                 (resultDisplayed === true && lastChar === "/")) {

//                 resultDisplayed = false;
//                 input.innerHTML += this.innerHTML;
//                 }
//         else {
//             resultDisplayed = false;
//             input.innerHTML = "";
//             input.innerHTML += this.innerHTML;
//         }
//     })
// });

// clearing the input on press of clear
clear.addEventListener('click', function() {
    input.innerHTML = '';
});