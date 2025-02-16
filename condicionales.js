//Tipos de mascotas:gato, perro, hmaster
//Condiciones jaula: grande, mediana y pequeña

let tipodemascota="Elefante";
if (tipodemascota==="Perro"){
    console.log("Si tienes un perro, necesitas la jaula grande")
} else if (tipodemascota==="Gato"){
    console.log("Si tienes un gato, necesita la jaula mediana")
}else if (tipodemascota==="Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña")
}else{
    console.log("No contamos con jaulas para esa amscota")
}
//semaforo color: rojo amarillo, verde
//rojo =alto, amarillo=detente, verde=siga

let colorsemaforo="amarillo";
if (colorsemaforo==="amarillo"){
    console.log("Detente")
}else if (colorsemaforo==="verde"){
    console.log("Avanza")
}else if (colorsemaforo==="rojo"){
    console.log("Alto")
}else{
    console.log("Error")
}

//Para poder obtneer una beca

let creditos=9; //Minimo 10 creditos
let promedio=7; //Minimo 8.5

if(creditos>=10 && promedio >=8.5){
    console.log("Tienes derecho a una beca")
}else if(creditos<10 && promedio >=8.5){
    console.log("No tienes derecho a una beca, Te hacen falta creditos")
}else if(creditos>=10 && promedio<8.5){
    console.log("No tienes derecho a una beca, Tienes que subir tu promedio")
}
else{
    console.log ("No tienes derecho a una beca")
}

//Agregra el mensaje de: te hacen falta creditos
//Agregar el mensaje de: Tu promedio debe subir


//Proyecto 2. Condicionales
let nota=0;

if(nota>=90){
    console.log("Excelente")
}else if(nota>=75 && nota<=89){
    console.log("Bien")
}else if(nota>=60 && nota<=74){
    console.log("Suficiente")
}else{
    console.log("El estudiante no aprueba")
}