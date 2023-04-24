//Realice un programa que dada la vida de un personaje, indique una acción: ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
//∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
//∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
//∙ la poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt("ingrese su nivel de vida"));

if (vida <= 50) { document.write(`su nivel de vida es: ${vida}. por favor tome una pocion grande.`);
} else if (vida = 50 && vida <= 75) { document.write(`Su nivel de vida es : ${vida}. Por favor tome una pocion chica de vida.`)
document.write(` Su vida actual es de ${vida + 25}`)}
else if (vida >= 75) {`Su vida actual es de ${vida}. No necesita ser curado`}
