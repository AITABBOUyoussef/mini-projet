const prompt = require("prompt-sync")();


function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Erreur : division par zéro";
    }
    return a / b;
}

function puissance(a, b) {
    return Math.pow(a, b);
}

function racinecarree(a) {
    if (a < 0) return "Erreur : racine carrée d'un nombre négatif";
    return Math.sqrt(a);
}

function factorielle(n) {
    if (n < 0) return "Erreur : factorielle négative";
    if (n === 0) return 1;
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
function stocker(a) {
    let  t = [];
    t.push(a);
    consulter(t)
}
function consulter(t) {
    if  (t.length!=0){
        let m=prompt("afficher l'historique? oui/non :")
        if (m==="oui"){
            console.log(t)

        }
    }
}

function menu() {
    console.log("\n=== CALCULATRICE ===");
    console.log("_____Operations_____ '+', '-', '*', '/', 'pow', 'sqrt', 'factorielle'"

    );
    console.log("Tapez 'exit' pour quitter.");
}

while (true) {
    menu();
    let operation = prompt("Entrez votre choix : ");

    if (operation === "exit") {
        console.log("Au revoir !");
        break;
    }

    let a, b, result;
    switch (operation) {
        case "+":
            a = +prompt("Entrez le nombre 1 : ");
            b =  +prompt("Entrez le nombre 2 : ");
            result = addition(a, b);
            console.log(result);
          
            break;

        case "-":
            a =  +prompt("Entrez le nombre 1 : ");
            b =  +prompt("Entrez le nombre 2 : ");
            result = soustraction(a, b);
            console.log(result);
          
            break;

        case "*":
            a =  +prompt("Entrez le nombre 1 : ");
            b =  +prompt("Entrez le nombre 2 : ");
            result = multiplication(a, b);
            console.log(result);
        
            break;

        case "/":
            a =  +prompt("Entrez le nombre 1 : ");
            b =  +prompt("Entrez le nombre 2 : ");
            result = division(a, b);
            console.log(result);
          
            break;

        case "pow":
            a =  +prompt("Entrez la base : ");
            b =  +prompt("Entrez l'exposant : ");
            result = puissance(a, b);
            console.log(result);
     
            break;

        case "sqrt":
            a =  +prompt("Entrez le nombre : ");
            result = racinecarree(a);
            console.log(result);
           
            break;

        case "factorielle":
            a =  +prompt("Entrez un entier positif : ");
            result = factorielle(a);
            console.log(result);
       
            break;

    

        default:
            console.log("Opération invalide !");
        }
stocker(result)
    }