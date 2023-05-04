

let golpes = []
for (i = 1; i <= 10; i++) {
    let golpesAleatorios = Math.round(Math.random(golpes) * 10), i = 10;
    golpes.push(golpesAleatorios);
    console.log(`${golpes}`)
}
golpeMax = Math.max(golpes.sort);

console.log(`el golpe mas fuerte que se dio fue ${golpeMax}`);
 //ver porque me devuelve que golpeMax es NaN;