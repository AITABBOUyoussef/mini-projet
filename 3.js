const  prompt = require("promt-sync")();
let operations = prompt("Entrez votre choix: '+', '-', '*', '/', 'pow', 'sqrt', 'factorielle'");
function Addition(a,b){
    return a+b;
}


function  Soustraction (a,b){
    return a-b;
}
let num1 ;num2;res  
switch (operation) {
    case "+" :
    num1 = +prompt("Entrez une nombre 1 :");
           num2 = +prompt("Entrez une nombre 2 :");
     res = Addition(num1,num2);
     console.log(res);
     
                 break;
    case "-" :
    num1 = +prompt("Entrez une nombre 1 :");
           num2 = +prompt("Entrez une nombre 2 :");
     res = Soustraction(num1,num2);
     console.log(res);
     
                 break;
}