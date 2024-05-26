
// let nota = 3;
// if (nota < 4) {
//     console.log ('Aplazado');
// } else if (nota < 7) {
//     console.log ('Desaprobado');
// } else if (nota < 9) {
//     console.log ('Aprobado');
// } else {
//     console.log ('Sobresaliente');
// }

// let ejercicio = "lunes";
// switch (ejercicio) {
//     case "lunes":
//     console.log("Caminate de 5km");
//     break;
//     case "martes":
//     console.log("Caminate de 10km");
//     break;
//     case "miércoles":
//     console.log("Correr de 5km");
//     break;
//     case "viernes":
//     console.log("Correr de 10km");
//     break;
//     default:
//     console.log("Descanso");
// }

// let expr="Adios";
// switch (expr) {
//     case 'Hola':
//     console.log("Buen día");
//     break;
//     case 'Adios':
//     console.log("Hasta pronto");
//     break;
//     case 'Ayuda':
//     console.log("En qué te puedo ayudar?");
//     break;
//     default:
//     console.log("No te entiendo");
// }

// let nombre=["Diego", "Anabel", "Esteban"];
// console.log(nombre);
// console.log(nombre[0]);
// console.log(nombre[2]);
// console.log("Cantidad de nombres:", nombre.length);
// for(let i=0; i< nombre.length; i++){
// console.log(nombre[i]);

// }

// let name=["Diego", "Anabel", "Esteban"];
// console.log(name);
// console.log(name[0]);
// console.log(name[2]);
// console.log("Cantidad de nombres:", name.length);
// for(let i=0; i< 5; i++){
// console.log(i);

// }

// let topping = "Oreo";
// let precio = 0;
// let precioFinal = 0;
// let helado = 200;

// if (topping == "Oreo") {
//     precio = 10;
// } else if (topping == "KitKat"){
//     precio = 15;
// } else if(topping == "Kinder"){
//     precio = 25;
// } else {
//     console.log("No tenemos este topping");
// }

// precioFinal = helado + precio;
// console.log("El helado cuesta $" + precioFinal);


// let expr="Carne";
// switch (expr) {
//     case 'Carne':
//     console.log("Tinto");
//     break;
//     case 'Pescado':
//     console.log("Blanco");
//     break;
//     case 'Verdura':
//     console.log("Agua");
//     break;
//     default:
//     console.log("Elija carne, pescado o verdura");
// }

// let bandas= ["Beatles", "Stones", "Led Zeppelin"];
// bandas.push("Stones");
// for(let i = 0; i<bandas.length; i++)
//     {
//         console.log(bandas[i]);
//     }


// // Declarar variables
// let numero = 1;  // Número inicial
// let suma = 0;    // Variable para almacenar la suma

// // Bucle while
// while (numero <= 10) {
//   suma += numero;  // Sumar el valor actual de 'numero' a 'suma'
//   numero++;        // Incrementar 'numero' en 1
// }

// // Mostrar el resultado
// console.log("La suma de los números del 1 al 10 es: " + suma);


// let resultado;
// let num1=3;
// let num2=5;
// function sumaMuestra(){
//     resultado=num1 + num2;
//     alert("El resultado es " + resultado);
// }
// sumaMuestra();


// // Solicita al usuario que introduzca un número entero
// let numero = prompt("Introduce un número entero");

// // Llama a la función parImpar y guarda el resultado
// let resultado = parImpar(numero);

// // Muestra el resultado en una alerta
// alert("El número " + numero + " es " + resultado);

// // Define la función parImpar
// function parImpar(numero) {
//   if (numero % 2 == 0) {
//     return "par";
//   } else {
//     return "impar";
//   }
// }


// Solicita al usuario que introduzca un número entero
let nombre = prompt("Introduce tu nombre");

// Define la función parImpar
function saludo() {
  if (nombre) {
    alert ('Hola ' + nombre);
  } else {
    alert ('Debes ingresar un nombre');
  }
}
saludo();


