//for

let empleados =["juan","roberto","maria","ana","ayelen","carlos","federico","ignacio","ramiro","nicolas"]

//console.log("cantidad de empleados"+  +  empleados.length);

let mensaje="";
let mensaje1="";
let mensaje2="";


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

console.log("-------------------------------------------------");

//imprimir los empelados mediante bucle while
 let i = 0;
while (i< empleados.length) {
   mensaje1 += empleados[i] +'<br>';
   document.getElementById('caja1').innerHTML = mensaje
   ++i
}

//funciones

 function imprimir_empleados() {
   for (let i = 0; i < empleados.length; i++) {
      mensaje2 += empleados[i] +'<br>';
      document.getElementById('caja2').innerHTML = mensaje2

 }
}

//llamo a la funcion para que cumpla su trabajo 
imprimir_empleados();

//funcion con parametros

function sumar(num1 , num2 , num3) {
   let resultado = num1 + num2 + num3;
  return resultado; 
   
}
document.getElementById('caja3').innerHTML = sumar(15,20,35);
/* console.log(sumar(15,20,35)); */


//funciones flecha

const multiplicar = (a, b, c) => {
let total = a * b * c;
return total;

}
document.getElementById('caja4').innerHTML = multiplicar(3,4,5)


/* console.log(multiplicar(3,4,5)); */

//funcion flecha con un solo elemento

const itemlista = (nombre) => '<li>'+ nombre + '</li>'

/* console.log(itemlista('roberto')); */

document.getElementById('caja5').innerHTML =itemlista('roberto');