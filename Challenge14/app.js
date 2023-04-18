// a traves de document.write concatenar un saludo almacenado en dos variables

let saludo1 = "Buenas tardes ";
let saludo2 = "comision 48i";
document.write(saludo1+saludo2 );

//Pedirle el nombre al usuario y devolver un msj con saludo en el HTML
let nombreUsuario = prompt("Ingrese su usuario");
let saludo = "Hola"
document.write(`Hola ${nombreUsuario}`)

//Ingresar un numero y devolver el doble del numero
let numero = prompt("ingrese un numero")
let numeroDoble = numero*2
console.log(`el doble de su numero es ${numeroDoble} `)


//mostrar la ultima letra del apellido ingresado
let usuarioApellido = prompt(`Ingrese su apellido`);
let usuarioModificado = usuarioApellido.charAt(usuarioApellido.length-1).toUpperCase();

console.log(`  la ultima letra de su apellido es ${usuarioModificado}`);