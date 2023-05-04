//Realice un programa donde un personaje abra 10 cofres, los cofres pueden contener: 10 de oro, 2 pociones de vida, nada.

//a. Indique el oro final recolectado

//b. Indique cuantas pociones de Vida obtuvo

//c. Indique cuantos cofres vacíos hubo

//d. Cada vez que abre un cofre indique qué saco

let oro = 0;
let pociones = 0;
let nada = 0;
let cofres = 10;
let vidaActual = 0;
let oroActual = 0;
while (cofres > 0) {
    let cofresA = confirm(
        `¿Queres abrir el cofre? te quedan ${cofres} cofres por abrir y tenes ${pociones} pociones de vida y ${oro} de oro y tenes ${nada} de cofres vacios`
    );
    if (cofresA<10) {
        cofresA--;
    }
    oroActual = Math.round(Math.random()) * 10;
    vidaActual = Math.round(Math.random()) * 2;
    pociones += vidaActual;
    oro += oroActual;
    if (oroActual == 0 && vidaActual == 0) {
        nada++;
    }
    alert(`¡abriste un cofre! viene con ${vidaActual} pociones y ${oroActual} de oro`);
}
document.write(`Terminaste tu turno con ${pociones} de pociones, ${oro} de oro y con ${nada}de cofres vacios :( ) `)
//no cierra el bucle