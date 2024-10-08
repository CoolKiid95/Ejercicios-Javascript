// Crear un algoritmo que solicite al usuario un número n y calcule la suma de todos
// los números del 1 a n.

// let numero = prompt ("Ingresa un numero")
// let contador = 0
// for (let index = 1; index <= numero; index++) {
//     contador = contador + index; 
// }
// console.log(contador); 


// Crear un algoritmo que determine si un número ingresado por el usuario es par o
// impar.
// let numbr = prompt ("Ingresa un numero")
// if (numbr % 2 === 0) { 
//     console.log("Par");
// } else {
//     console.log("impar");
// }

// La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si
// reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
// a. Si el usuario tiene 10 años o menos, recibe un jugo.
// b. Si el usuario es mayor de 18 años, recibe una cerveza.
// c. Si el usuario es mujer, además recibe una porción de pizza Hawaiana.
// d. Si el usuario es hombre, además recibe una porción de pizza de tres
// carnes.
// e. Si el usuario no cumple con ninguna condición, se le debe informar que no
// recibe ningún premio.

let edad = prompt ("ingresa tu edad")
let genero  = prompt ("ingresa tu genero")

if (edad < 10 && genero === "mujer") {
    console.log("Recibe juego y pizza hawaiana");
    
} else if (edad > 18 ) {
    console.log("recibe cerveza");
    
}