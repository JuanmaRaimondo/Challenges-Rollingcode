let life = Math.round(Math.random() * 100);

console.log(life);


if (life >= 0 && life <= 100) {
    if (life <= 20) { document.write(`su vida es ${life}. !Por favor huya! `) }
    else if (life >= 21 && life <= 50) { document.write(`su vida es ${life}. Pongase en modo defensivo `) }
    else if (life >= 81 && life <= 100) { document.write(`su vida es ${life}. Poner modo ofensivo`) }
}



else {
    alert = 'ingrese un valor dentro de los parametros'
}
