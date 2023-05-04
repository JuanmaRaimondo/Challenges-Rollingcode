let golpes =[];
let dañoFinal = 0;

for (let i = 0; i < 10; i++) {
   let daño = Math.round(Math.random()*1000+1000);
   console.log(`el daño recibido por este golpe fue de ${daño}`)
   golpes.push(daño);
   dañoFinal+=daño;    
}

console.warn(`el daño total final fue de ${dañoFinal}`)