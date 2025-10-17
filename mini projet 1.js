const  prompt = require("promt-sync")();
let a = +prompt("num1");
let b = +prompt("num2");

function Addition(a,b){
    return a+b;
}


function  Soustraction (a,b){
    return a-b;
}
console.log("le resultat est :",suustraction(a,b)) ;


function Multiplication (a,b){
    return a*b;
}


function Division (a,b ){
    if (b === 0 ){ ;
      return "non divisible par 0";
    }
         return a/b ;  
}


function Puissance ( a,b){
    return Math.pow(a,b);
}


function Racinecarrée (a){
    return Math.sqrt(a);
}


function Factorielle (a){
    if ( a<0 )
        return "non factorielle negative ";
    if (a === 0)
        return 1;
    let c = 1;
    for (let i=1 ; i<=a ; i++){
        res = res * i ;
    }
    return res;
}

switch (operations) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "sqrt":
    case "factorielle" :
        let nombre = prompt("Entrez une nombre 1 :");
        let nombre2 = prompt("Entrez une nombre 2 :");
        let a = parseFloat(nombre1);
        let b = parseFloat(nombre2);
        let resultats; }
switch (operation) {
    case "+" :
    result = addition(a, b);
                 operation =` ${a} + ${b} = ${resultats}`;
                 break;
    case "-" :
    result = soustraction(a, b);
                 operation = `${a} - ${b} = ${resultats}`;
                 break;
    case "*" :
     result = Multiplication(a, b);
                operation = `${a} ${b} = ${resultats}`;
                 break;

    case "/" :
        result = division(a, b);
                 operation = `${a} / ${b} = ${resultats}`;
                 break;
      case "^":
                 result = puissance(a, b);
                 operation = `${a} ^ ${b} = ${resultats}`;
                 break;
     case "sqrt":
                 result = racinecarree(a, b);
                 operation =` Math.sqrt ${a} = ${resultats}`;
     case "factorielle":
                 result = factorielle(a, b);
                 operation = `res ${a} = ${resultats}`;
}

