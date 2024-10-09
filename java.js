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


// function prize() {
    
//     let edad = prompt ("ingresa tu edad")
//     let genero  = prompt ("ingresa tu genero hombre/mujer")
//     if (edad <= 10 && genero === "mujer") {
//         console.log("Toma un juguito con una pizza Hawaiana");
        
//     } else if (edad >= 18 && genero === "mujer") {
//         console.log("Toma una chela con una pizza hawaiana");

       
//     } else  if (edad <= 10 && genero === "hombre") {
//         console.log("Toma un juguito con una pizza de tres carnes.");
//     } else if (edad >= 18 && genero === "hombre") {
//         console.log("Toma una chelita con una pizza de tres carnes");
//     } else    {
//         console.log("Paila prro, no hay nada mas para ud");
//     }    
// }
// prize();




// Crear un algoritmo que permita al usuario seleccionar productos de un menú
// escribiendo el nombre del producto. Cada selección sumará el precio del
// producto al total, hasta que el usuario escriba "pagar". Al finalizar, el programa
// mostrará el total a pagar.
// Las opciones del menú puede ser definido por el programador
// Pista: Se puede realizar con 2 arrays o con 1 array de objetos
//hacer 1 array de objeto, donde cada objeto tiene nombre del producto y valor. 

// function menu() {
//     let items = ["hamburguesa", "pizza", "perro caliente", "lasagna","arepa rellena" ]
//     let price = [25000, 20000, 18000, 25000, 15000]

// }




// Crear un algoritmo que muestre la tabla de multiplicar de un número ingresado por
// el usuario hasta un límite también especificado por el usuario. Además, el
// programa debe mostrar el total de las multiplicaciones.




// function multiplicar() {
//     let numero = prompt("Ingresa un número para multiplicar:");    
//     let limite = prompt("ingresa el limite");
//     let total = 0;
//     for (let i = 1; i <= limite; i++) {
//         let resultado = numero * i;
//         total += resultado;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }

//     console.log(`Total de las multiplicaciones: ${total}`);
// }

// multiplicar();
