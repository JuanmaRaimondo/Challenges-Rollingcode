//algoritmo para calcular la letra del dni.
//el numero debe ser entre el 0 y el 99999999. se calculara el resto de la división entera entre el numero y 23

let dni = 0;
let cont = true;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
while (dni <= 99999999 && true && dni != isNaN) {
    dni = prompt('Ingrese su DNI por favor');
    if (dni < 99999999 && cont == true) {
        alert(`la letra de su documento es ${letras[dni % 23]}`);
        cont = confirm("¿desea continuar?");
    } else {
        while (isNaN(dni)) {
            while (dni > 99999999 || isNaN(dni)) {
                dni = parseInt(prompt('su numero ingresado no corresponde a un dni valido. Por favor ingrese un dni valido'));
            }
            alert(`la letra de su dni es ${letras[dni%23]}`)
        }
    }

}