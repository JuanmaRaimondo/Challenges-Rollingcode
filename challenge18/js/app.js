//Dada las revoluciones por minuto de un auto en un juego de carreras, indique si el conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. Sabiendo que:
//Si las RPM son menores a 1000 debe bajar
//Si las RPM están entre 1000 y 3000 debe mantener
//Si las RPM son más de 3000 debe subir

let = revoluciones = parseInt(prompt("ingrese las revoluciones de su auto"));

if (revoluciones <= 1000) { console.warn(" suba sus revoluciones, por favor")
    
} else if (revoluciones > 1000 && revoluciones <= 3000) {  console.log(" Mantengase en este rango de revoluciones")
    
} else if ( revoluciones > 3000) {console.warn("baje sus revoluciones, por favor")

}