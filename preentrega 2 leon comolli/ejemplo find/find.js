// Find devuelta el valor de la primera pelicula del array
// que coincide

const peliculas = ['Predator' , 'Cenicienta' , 'Peter pan']

const resultado = peliculas.find (function (pelicula){
    return pelicula.includes('Cenicienta');
})
console.log (resultado);

// en este caso arroja resultado cenicienta pero si
// se cambia el include puede buscar cualquier otro
