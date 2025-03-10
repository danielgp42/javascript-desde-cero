function libros(titulo, autor, anio, estado){
    this.titulo=titulo;
    this.autor=autor;
    this.anio=anio;
    this.estado=estado;
}

this.caracteristicaslibro=function(){
    console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    
};
