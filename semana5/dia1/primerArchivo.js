//variables
//let
//const
//var = puede generar conflicto

// let numero1 = 10;
// let numero2 = 100;

// suma = numero1 + numero2;
// resta = numero1 - numero2;

// console.log("Resultado",suma);
// console.log("Resultado",resta);

// console.error("este es el resultado ",suma)

const valor1=prompt("ingrsa valor 1: ");
const valor2=prompt("ingrsa valor 2: ");

const operacion = "+";

if(operacion === "+"){
    resultadoCalculadora=valor1+valor2;
    console.log("resultado",resultadoCalculadora);
    
}else if(operacion === "-"){
    resultadoCalculadora=valor1-valor2;
    console.log("resultado",resultadoCalculadora);
    
}else if(operacion === "*"){
    resultadoCalculadora=valor1*valor2;
    console.log("resultado",resultadoCalculadora);
    
}

console.log("valor1: ",valor1);





