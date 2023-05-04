let tirada = prompt('Para jugar elija entre piedra, papel o tijera').toLowerCase;
let jugadas = ['piedra', 'papel', 'tijera'];

const juego = function () {
    let tiradapc = jugadas[Math.round(Math.random() * jugadas.length)];
    while (tirada != jugadas) {
        console.error('usted no eligió una jugada correcta. Por favor ingrese una jugada correcta')
        prompt('Para jugar elija entre piedra, papel o tijera').toLowerCase;
    }
    if (tirada === 'piedra' && tiradapc === 'tijera', tirada === 'tijera' && tiradapc === 'papel', tirada === 'papel' && tiradapc === 'piedra') {
        alert('¡Ganaste!')
    } else if (tirada === 'piedra' && tiradapc === 'papel', tirada === 'tijera' && tiradapc === 'piedra', tirada === 'papel' && tiradapc === 'tijera') {
        alert('¡Perdiste!')
        prompt('Para jugar elija entre piedra, papel o tijera').toLowerCase;
    } else {
        alert("EMPATE")
        prompt('Para jugar elija entre piedra, papel o tijera').toLowerCase;
    }
}
juego