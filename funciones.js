/**
 Las funciones son las tareas que va a llevar a cabo el navegador
 Diferencias:
    A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
    Ya que el hoisting solo se aplica en las palabras reservadas var y function.
 */

//Declarativas
function suma(){
    return 1;
}


//Expresion o función anonima
var miSuma = function(a, b){
    return a + b; 
}
//console.log(miSuma(2,8));



miSuma(2, 2);

function saludar(nombre){
    console.log(`Hola ${nombre}`);     
}

function restar(val1, val2){
    return val1-val2;
}

function multiplicacion(a, b){
    return a*b;
}

function division(a, b){
    return a/b;
}
