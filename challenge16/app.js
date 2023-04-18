let descuentos = prompt("ingrese la marca y modelo de su auto");

const descuentos3 = descuentos.toLowerCase;

if (descuentos == "ford fiesta") {document.write('usted posee un descuento del 5%')
    
}else if (descuentos == "ford focus") { document.write('usted posee un descuento del 10%')}

else {document.write("el modelo que ingresó no posee ningun descuento")}