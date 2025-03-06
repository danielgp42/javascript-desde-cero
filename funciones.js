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

let usuario = prompt("¿cual es tu nombre?"); //los datos se guardan en cadenas 
let gatos = prompt("¿cuantos gatos tienes?");
let perros = prompt("¿cuantos perros tienes?");
let total2= parseInt(gatos) + parseInt(perros); //convertir string a numeros

// Vemos los datos en consola
console.log(` ${usuario} tiene ${gatos} gatos y ${perros} perros.`);

// Vemos los datos en pop up
alert(`${usuario} tiene ${gatos} gatos y ${perros} perros, en total tiene ${total2} mascotas.`);

// Vemos los datos en la pagina
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total2} mascotas.`);
