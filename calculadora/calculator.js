let primer ;
let segundo ;
let operacion;
let resultSum = [];
let resultRest = [];
let resultMult = [];
let resultDiv = [];


while(isNaN(primer)){
  primer =  Number(prompt('Inserte el primer numero'));
}
while(isNaN(segundo)){
    segundo = Number(prompt('Inserte el segundo numero'));
}

if(primer == ""){
    console.log('La raiz cuadrada de '+segundo+ ' es = '+ Math.sqrt(segundo));
    
    } else if(segundo == ""){
    console.log('La raiz cuadrada de '+primer+ ' es = '+ Math.sqrt(primer));
    
    }else {
     operacion = prompt('Indique la operacion a realizar: +, -, *, /');}

function suma(n1, n2){
    resultSum.push(Math.round((n1+n2)*1000)/1000);
    console.log('El resultado de la suma es ');
    return resultSum;
    }
function resta(n1, n2){
    resultRest.push(Math.round((n1-n2)*1000)/1000);
	console.log('El resultado de la resta es ');
    return resultRest;
}
function multiplicacion(n1, n2){
    resultMult.push(Math.round((n1*n2)*1000)/1000);
	console.log('El resultado de la multiplicacion es ');
    return resultMult;
}
function division(n1, n2){
    resultDiv.push(Math.round((n1/n2)*1000)/1000);
	console.log('El resultado de la division es ');
    return resultDiv;
}

switch(operacion){
    case '+' :
        suma(primer,segundo);
        break;
    case '-' :
        resta(primer,segundo);
        break;
    case '/' :
        division(primer,segundo);
        break;
    case '*' : 
        multiplicacion(primer,segundo);
        break;
    default :
        console.log('No ha seleccionado una operacion correcta');
}