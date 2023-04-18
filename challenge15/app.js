//Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.

// let numero1 = parseInt(prompt("Ingrese un numero"));
// let numero2 = parseInt(prompt("ingrese otro numero"));
// let resta = numero1 - numero2;
// let multiplicacion = numero1 * numero2;
// document.write(`la resta entre ${numero1} y ${numero2} es ${resta} y la multiplicacion de ${numero1} y ${numero2} es igual a ${multiplicacion}`);

//El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no)
// let nombre1 = prompt("Ingrese su nombre ");
// let apellido1 = prompt("Ingrese su apellido");

// console.log(`su nombre contiene las letras m y a ${nombre1.includes("a")} ${nombre1.includes("m")}`);
// console.log(`su nombre contiene las letras m y a ${apellido1.includes("a")} ${apellido1.includes("m")}`);



//if (numero1 < numero2) {console.warn(`su primer numero es menor a ${numero2}`)     }
//if (numero1 > numero2) {console.warn(`su primer numero es mayor a ${numero2}`)     }
//if (numero1 == numero2) {console.warn(`su primer numero es igual a ${numero2}`)     }


//Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito') investigar a través de que método podemos quitar los guiones y reemplazar por espacios


let vartiable = "pablito-clavo-un-clavito";

console.log(`la variable sin guiones es :${vartiable.replaceAll("-",'')}`)