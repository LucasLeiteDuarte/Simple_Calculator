const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearButton = document.getElementById("clear-button");
let operator = "";
let firstValue = "";
let secondValue = "";

function addEventListenersToButtons() {
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });
}

function handleButtonClick(event) {
    if (event.target.classList.contains("number")) {
        handleNumberClick(event.target);
    } else if (event.target.classList.contains("operator")) {
        handleOperatorClick(event.target);
    } else if (event.target.dataset.result) {
        handleEqualClick();
    }
}

function handleNumberClick(button) {
    // Gere um evento de clique quando um botão de número é pressionado
    display.value += button.dataset.number;
}

function handleOperatorClick(button) {
    // Gere um evento de clique quando um botão de operador é pressionado
    operator = button.dataset.operator;
    firstValue = display.value;
    display.value = "";
}

function handleEqualClick() {
    // Gere um evento de clique quando o botão de igual é pressionado
    secondValue = display.value;
    display.value = eval(firstValue + operator + secondValue);
}

function handleClearClick() {
    // Gere um evento de clique quando o botão de limpar é pressionado
    clearButton.addEventListener("click", function () {
        display.value = "";
        operator = "";
        firstValue = "";
        secondValue = "";
    });
}

addEventListenersToButtons();
handleClearClick();