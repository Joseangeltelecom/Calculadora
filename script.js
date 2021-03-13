
const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual') [0];
const botonDelete = document.getElementsByName('data-delete') [0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = '';


botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })   
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function(){
       selectOperacion(boton.innerText);
    })   
});


 botonIgual.addEventListener('click',function() {
     calcular();
     actualizarDisplay();     
 });


botonDelete.addEventListener('click',function() {
    clear();
    actualizarDisplay();     
});

function selectOperacion(op) {
    if (opeActual === '') return; // si la operacion actual esta vacia que salga de la operacion. que no hay nigun numeor en la operacion actual
    if (opeActual !== '') calcular()
   
   operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    let calculo; 
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)
    
    if (isNaN(anterior) || isNaN(actual)) return;

    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;    
    }
opeActual = calculo;
console.log(operacion);
operacion = undefined;
opeAnterior = '';
}


function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString(); // '' + 1
    actualizarDisplay();
}

function clear () {

    opeActual = '';
    opeAnterior = '';
    operacion = '';
}

function actualizarDisplay() {
    result.value = opeActual; // 1
    
}

clear();


/*
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const pointButton = document.querySelector("[data-point]");
const screen = document.querySelector("[data-screen]");


function convertOperator(keyboardOperator) {
    if (keyboardOperator === "/") return "÷";
    if (keyboardOperator === "*") return "×";
    if (keyboardOperator === "-") return "−";
    if (keyboardOperator === "+") return "+";
  }

function add (num1,num2) {
	return num1 + num2
}

function subtract (num1,num2) {
	return num1-num2
}

function multiply (num1,num2) {
	return num1 * num2
}

function divide (num1,num2) {
	return num1 / num2
}

    function operate(operator, num1, num2){
        switch(operator){
            case '+':
                return add(num1, num2);
            case '-':
                return subtract(num1, num2);
            case '*':
                return multiply(num1, num2);
            case '/':
                return divide(num1, num2);
        } }

   console.log(operate( '*', 2 ,9));
*/