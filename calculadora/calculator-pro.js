
function calculatorPro() {
    let newNumber  ;
    let numberList = [];
  
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        if(newNumber != null){
            if(isNaN(newNumber) || newNumber == ''){
            alert('Introduzca solo numeros')
         }   else{numberList.push(Number(newNumber))
        }
      }      
    }
     while (newNumber != null);

    if(numberList.length == 1){
        console.log('La raiz cuadrada de '+numberList[0] +' es '+ Math.sqrt(numberList[0]));
    }   else{
       let resultSum =numberList[0];
       let resultRest = numberList[0];
       let resultMult = numberList[0];
       let resultDiv = numberList[0];

            
                for(let i=1; i<numberList.length; i++){

                    resultSum = Math.round((resultSum + numberList[i])*1000)/1000; 
        
                    resultRest = Math.round((resultRest - numberList[i])*1000)/1000;

                    resultMult = Math.round((resultMult * numberList[i])*1000)/1000;
        
                    resultDiv = Math.round((resultDiv / numberList[i])*1000)/1000;        
                }
        
                console.log('El resultado de la suma es ' + resultSum);
                console.log ('El resultado de la resta es ' + resultRest);
                console.log('El resultado de la multiplicacion es ' + resultMult);
                console.log('El resultado de la division es ' + resultDiv);    
            }  

    if(confirm('Desea realizar otra operacion?')){
        calculatorPro()
    }else {
           console.log('Bye!')
    }
 }
    
calculatorPro();


