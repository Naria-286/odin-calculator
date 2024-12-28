function add (a,b) {
    return a + b
}
function subtract (a,b) {
    return a - b
}
function multiply (a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
}

let firstNumber
let operator
let secondNumber

function operate (first, operator, second) {
    switch (operator) {
        case "+":
            return add(first,second)
        case "-":
            return subtract(first,second)
        case "*":
            return multiply(first,second)
        case "/":
            return divide(first,second)
    }

}

const container = document.querySelector("#container")
const display = document.querySelector("#calc-display")

container.addEventListener('click', (event) => {
    const inputValue = event.target.innerText
    if (inputValue === "c") {
        display.innerText = ''
    } else if (inputValue === '=') {
        // Do the operator function
        return
    } else {
        display.innerText += inputValue
    }
    
})
