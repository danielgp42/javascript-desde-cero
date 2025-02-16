//Programa para mostrar los multiplos de 5 hasta un numero dado por el usuario

let numero=100;
let contador=1;
while(contador<=numero){
    //Codigo a iterar
    if (contador %5 ===0){
        console.log(contador);
    }
    contador++; //Incremento del contador
}
console.log("Fin del programa")
//contador puede ser contador== contador +1
// contaodr = contador-1


// Numeros impares

let numero2=35;
for(let indice=0; indice <= numero2; indice++){
    if(indice %2 !==0){
        console.log(indice)
    }
}

//Imprimir los numeros del 1 al 10
//While, cuando no sabemos cuantas veces se va a repetir
let inicio=0;
while(inicio <=10){
    console.log(inicio);
    inicio++;
}
console.log("Fin del programa")

//Ya sabemos cuantas veces se va a repetir el codigo
//Para arreglos
for(let i=1; i<=10;i++){
    console.log(i);
}
console.log("Fin del programa")