function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function add() {
    document.getElementById("result").value += "+";
}

function sub() {
    document.getElementById("result").value += "-";
}

function mul() {
    document.getElementById("result").value += "*";
}

function div() {
    document.getElementById("result").value += "/";
}

function mod() {
    document.getElementById("result").value += "%";
}

function evaluateExpression() {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function square() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(value, 2);
}

function squareRoot() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(value);
}

function cube() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(value, 3);
}

function cubeRoot() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = Math.cbrt(value);
}

function factorial() {
    let value = parseInt(document.getElementById("result").value);
    if (value < 0) {
        alert("Factorial of negative numbers is not defined");
        return;
    }
    let fact = 1;
    for (let i = 1; i <= value; i++) {
        fact *= i;
    }
    document.getElementById("result").value = fact;
}




