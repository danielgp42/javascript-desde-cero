
let verduras=['lechuga','tomate','cebolla','jitomate','papa','pimiento'];

console.log(verduras [2]);

for (let indice=0; indice< verduras.length; indice++){
    console.log(verduras[indice]);
}

let personas=[]; //Arreglo vacio

personas.push('Ana');//Agrega un elemento al final de un arreglo
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela');
console.log(personas);

personas.pop(); //Elimina el ultimo elemento de la lista

console.log(personas);

personas.unshift('Alex');//Agregar al inicio del arreglo
personas.unshift('Yolanda');

console.log(personas);

personas.shift(); //Elimina el primer elemento del arreglo
console.log(personas);

personas[1]='Monica'; //Modificar un elemento del arreglo
console.log(personas);


//Proyecto 3 de arreglo de frutas
let frutas= ['manzana', 'pera', 'naranja', 'platano','fresa', 'guayaba', 'manzana'];
//Se crea un objeto para almacenar la cantidad de frutas
let contadorfrutas= {};

for (let indice=0; indice<frutas.length; indice++){
    let fruta= frutas[indice];
    if (contadorfrutas[fruta]){
        //si la fruta ya existe, incrementar el contador
        contadorfrutas[fruta]++;
    }else{
        contadorfrutas[fruta]=1;
        //si la fruta no existe, iniciar el contador en 1 
    }
}

console.log("Conteo de frutas usando ciclo for:");
for (let fruta in contadorfrutas) {
    console.log(`${fruta}: ${contadorfrutas[fruta]}`);
}