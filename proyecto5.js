function libros(titulo, autor, anio, estado){
    this.titulo=titulo;
    this.autor=autor;
    this.anio=anio;
    this.estado=estado;
    this.caracteristicaslibro=function(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado del libro es: ${this.estado}.`);
    }
};

//Ejemplos para probar el codigo

let libro1 = new libros("El gallo de oro", "Juan Rulfo", 1980, "Prestado");
let libro2 = new libros("Fuego y sangre", "George R. R. Martin", 2018, "Disponible");

//llamar a la funcion para mostrar info de los libros

libro1.caracteristicaslibro();
libro2.caracteristicaslibro();
