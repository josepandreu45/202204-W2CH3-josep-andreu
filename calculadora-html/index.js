
let numeroUno = document.getElementById("uno") ;
let numeroDos = document.getElementById("dos") ;
let numeroTres = document.getElementById("tres") ;
let numeroCuatro = document.getElementById("cuatro") ;
let numeroCinco = document.getElementById("cinco") ;
let numeroSeis = document.getElementById("seis") ;
let numeroSiete = document.getElementById("siete") ;
let numeroOcho = document.getElementById("ocho") ;
let numeroNueve = document.getElementById("nueve") ;
let numeroCero = document.getElementById ("cero") ;
let botonAc = document.getElementById("ac") ;
let botonBorrar = document.getElementById("return") ;
let botonComa = document.getElementById("coma") ;
let botonSuma = document.getElementById("suma") ;
let botonResta = document.getElementById("resta") ;
let botonDivision = document.getElementById("division") ;
let botonMultiplicacion = document.getElementById("multiplicacion") ;
let botonIgual = document.getElementById("igual") ;
let pantalla = document.getElementById("pantalla") ;


let numeroActual = [] ;
let numeroPrevio = [] ;
let signoOperacion = '' ;
let resultado = [] ;
let firstTime = true;


numeroUno.onclick = () => {
    numeroActual.push(1)
    numeroActual.join('') ;
    pantalla.innerHTML = numeroActual.join('') ;
    
}

numeroDos.onclick = () => {
    numeroActual.push(2) ;
    numeroActual.join('') 
    pantalla.innerHTML = numeroActual.join('') ;
    
}

numeroTres.onclick = () => {
    numeroActual.push(3) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

numeroCuatro.onclick = () => {
    numeroActual.push(4) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

numeroCinco.onclick = () => {
    numeroActual.push(5) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

numeroSeis.onclick = () => {
    numeroActual.push(6) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

numeroSiete.onclick = () => {
    numeroActual.push(7) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

numeroOcho.onclick = () => {
    numeroActual.push(8) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;;
}

numeroNueve.onclick = () => {
    numeroActual.push(9) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

numeroCero.onclick = () => {
    numeroActual.push(0) ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

botonComa.onclick = () => {
    numeroActual.push('.') ;
    numeroActual.join('')
    pantalla.innerHTML = numeroActual.join('') ;
}

botonAc.onclick = () => {

    numeroActual = [] ;
    numeroPrevio = [] ;
    signoOperacion = '' ;
    resultado = [] ;
    firstTime = true
    pantalla.innerHTML = 0 ;

}

botonBorrar.onclick = () => {
    
   if(numeroActual.length > 1){ 
        numeroActual.pop()
        numeroActual.join('')
        pantalla.innerHTML = numeroActual.join('')
    }else{
        numeroActual = []
        pantalla.innerHTML = resultado
    }


}

botonSuma.onclick = () => {

    if(firstTime){
        if(signoOperacion === '+'){
            numeroPrevio.push(Number(numeroActual.join('')))
            resultado = [Math.round((numeroPrevio[0] + numeroPrevio[1])*1000)/1000]
            firstTime = false
            numeroActual = []
            pantalla.innerHTML = resultado + signoOperacion

        }else{
        operacion()
        numeroPrevio.push(Number(numeroActual.join('')))
        signoOperacion = '+'
        numeroActual = []
        pantalla.innerHTML += signoOperacion
        
        }
    }else{
        operacion()
        signoOperacion = '+'
        numeroActual=[]
        pantalla.innerHTML = resultado + signoOperacion

    }
}

botonResta.onclick = () => {

    
if(firstTime){
    if(signoOperacion === '-'){
        numeroPrevio.push(Number(numeroActual.join('')))
        resultado = [Math.round((numeroPrevio[0] - numeroPrevio[1])*1000)/1000]
        firstTime = false
        numeroActual = []
        pantalla.innerHTML = resultado + signoOperacion

    }else{
    operacion()
    numeroPrevio.push(Number(numeroActual.join('')))
    
    signoOperacion = '-'
    numeroActual = []
    pantalla.innerHTML += signoOperacion
    
    }
}else{
    operacion()
    signoOperacion = '-'
    numeroActual=[]
    pantalla.innerHTML = resultado + signoOperacion
}
    
}

botonMultiplicacion.onclick = () => {
    
    if(firstTime){
        if(signoOperacion === '*'){
            numeroPrevio.push(Number(numeroActual.join('')))
            resultado = [Math.round((numeroPrevio[0] * numeroPrevio[1])*1000)/1000]
            firstTime = false
            numeroActual = []
            pantalla.innerHTML = resultado + signoOperacion

        }else{
        operacion()
        numeroPrevio.push(Number(numeroActual.join('')))
        signoOperacion = '*'
        numeroActual = []
        pantalla.innerHTML += signoOperacion
        
        }
    }else{
        operacion()
        signoOperacion = '*'
        numeroActual=[]
        pantalla.innerHTML = resultado + signoOperacion
    }

}

botonDivision.onclick = () => {
    
    if(firstTime){
        if(signoOperacion === '/'){
            numeroPrevio.push(Number(numeroActual.join('')))
            resultado = [Math.round((numeroPrevio[0] / numeroPrevio[1])*1000)/1000]
            firstTime = false
            numeroActual = []
            pantalla.innerHTML = resultado + signoOperacion

        }else{
        operacion()
        numeroPrevio.push(Number(numeroActual.join('')))
        signoOperacion = '/'
        numeroActual = []
        pantalla.innerHTML += signoOperacion
        
        }
    }else{
        operacion()
        signoOperacion = '/'
        numeroActual=[]
        pantalla.innerHTML = resultado + signoOperacion
    }
    

}

botonIgual.onclick = () =>{


    operacion()
    pantalla.innerHTML = resultado
    signoOperacion = '';
} 

    
function operacion ()  {

    switch(signoOperacion){

        case '+' : 
        
        if(firstTime){
            numeroPrevio.push(Number(numeroActual.join('')))
            resultado = [Math.round((numeroPrevio[0] + numeroPrevio[1])*1000)/1000]
           
            numeroPrevio = []
            numeroPrevio.push(resultado)
            pantalla.innerHTML += signoOperacion
            pantalla.innerHTML = resultado
            firstTime = false

        }else{
            resultado.push(Number(numeroActual.join('')))
            resultado = [Math.round((resultado[0] + resultado[1])*1000)/1000]
            
            numeroPrevio = []
            pantalla.innerHTML = resultado + signoOperacion
        }
        
        break;

        case '-' :

            if(firstTime){
                numeroPrevio.push(Number(numeroActual.join('')))
                resultado = [Math.round((numeroPrevio[0] - numeroPrevio[1])*1000)/1000]
                
                numeroPrevio = []
                numeroPrevio.push(resultado)
                pantalla.innerHTML += signoOperacion
                pantalla.innerHTML = resultado
                firstTime = false
    
            }else{
                resultado.push(Number(numeroActual.join('')))
                resultado = [Math.round((resultado[0] - resultado[1])*1000)/1000]
                
                numeroPrevio = []
                pantalla.innerHTML = resultado + signoOperacion
            }
            
       
        break;

        case '*' :

            if(firstTime){
                numeroPrevio.push(Number(numeroActual.join('')))
                resultado = [Math.round((numeroPrevio[0] * numeroPrevio[1])*1000)/1000]
               
                numeroPrevio = []
                numeroPrevio.push(resultado)
                pantalla.innerHTML += signoOperacion
                pantalla.innerHTML = resultado
                firstTime = false
    
            }else{
                resultado.push(Number(numeroActual.join('')))
                resultado = [Math.round((resultado[0] * resultado[1])*1000)/1000]
                
                numeroPrevio = []
                pantalla.innerHTML = resultado + signoOperacion
            }
            
        break;

        case '/' :

            if(firstTime){
                numeroPrevio.push(Number(numeroActual.join('')))
                resultado = [Math.round((numeroPrevio[0] / numeroPrevio[1])*1000)/1000]
                
                numeroPrevio = []
                numeroPrevio.push(resultado)
                pantalla.innerHTML += signoOperacion
                pantalla.innerHTML = resultado
                firstTime = false
    
            }else{
                resultado.push(Number(numeroActual.join('')))
                resultado = [Math.round((resultado[0] / resultado[1])*1000)/1000]
                
                numeroPrevio = []
                pantalla.innerHTML = resultado + signoOperacion
            }
            
       
        break;

        }
    
    }