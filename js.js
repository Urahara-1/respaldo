//for

let empleados =["juan","roberto","maria","ana","ayelen","carlos","federico","ignacio","ramiro","nicolas"]

//console.log("cantidad de empleados"+  +  empleados.length);

let mensaje="";


for (let i = 0; i < empleados.length; i++) {
   console.log(empleados[i]);

}

console.log("---------------------------------------------");


let ventas=[2500,150,300,1200,2800,4500]

for (let i = 0; i < ventas.length; i++) {
 console.log(ventas[i]);
    
}

console.log("-------------------------------------------------");


//imprimimos la lista de empleados en la vista


for (let i = 0; i < empleados.length; i++) {
   mensaje += empleados[i] +'<br>';
   document.getElementById('caja').innerHTML = mensaje
    
}