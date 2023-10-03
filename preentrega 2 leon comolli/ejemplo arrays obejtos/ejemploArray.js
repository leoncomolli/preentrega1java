// Ejemplo array de 3 con objetos // 
const arrayDeObjetos = [
    {
        nombre: "Gaston",
        edad: 28,
        deporteFavorito: "Futbol",
    },
    {
        nombre: "Micaela",
        edad: 24,
        deporteFavorito: "Voley",
    },
    {
        nombre: "Dante",
        edad: "18",
        deporteFavorito: "Rugby"
    },
];
// Impresion del array //
for(let i = 0; i < arrayDeObjetos.length; i++){
    console.log("Nombre: " + arrayDeObjetos[i].nombre);
    console.log("Edad: " + arrayDeObjetos[i].edad);
    console.log("Deporte Favorito: " + arrayDeObjetos[i].deporteFavorito);
}