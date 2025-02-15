function Suma (numero1, numero2){ //Palabra reservada function
    let total=numero1+numero2;
    return total;
    //return nos permite guardar el resultado en una variable

}

//Lamada a mi funcion
let resultado= Suma(10,10);
console.log(resultado);
console.log(Suma(12,20));

function saludar (nombre){
    console.log("hola, bienvenido/a" + nombre);
}
saludar("Carolina");
console.log(Suma(2,3));
let total="hola";

function restar (a,b){
    let total= a-b;
    console.log(total);
    //solo se imprime en consola
}

restar(13,2);
console.log(total);

function casita(){//no recibe párametros, es decir, datos de entrada
    let nombre= "daniel";
    let apellido= "palomo";
    console.log("esta es una casita");
}
casita();

let nombre="daniel"; // varibale global
let edad= 24;
let ciudad="ciudad de mexico";

console.log("el se llama" + nombre + "tiene" + edad + "años y vive en" + ciudad);
console.log (`el se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`);

let usuario = prompt("¿cual es tu nombre?");
let gatos = prompt("¿cuantos gatos tienes?");
let perros = prompt("¿cuantos perros tienes?");

console.log(` ${usuario} tienes ${gatos} y ${perros} perros.`);

alert(`${usuario} tienes ${gatos} y ${perros} perros.`);
document.write(`${usuario} tienes ${gatos} y ${perros} perros.`);
