/* 
    ¿Que es una funcion de orden superior?

    Es una funcion que recibe otra funcion como argumento.
*/


// function saludar(usuario){
//     return `Hola ${usuario}`
// }
// function despedir(usuario){
//     return `Adios ${usuario}`
// }

// Me interesa crear una funcion que pueda recibir
// un usuario y saludo y saludar a ducho usuario con
// dicho saludo.

// function crearSaludo(usuario, saludo){ // saludo -> function
//     return saludo(usuario)
// }

// console.log(crearSaludo("Jony", despedir))



// Ejercicio 1: Programar una funcion que filtre
// elementos de un arreglo.
const frutas = ["Mora", 'Pera', 'Banana', 'Manzana'];

// Quiero inicialmente filtrar todas las frutas cuya 
// longitud es 4.

// function filtrar(lista, condicion) { // condicion es una f
//     const nuevaLista = [];

//     for (const elemento of lista) {
//         if(condicion(elemento)){
//             nuevaLista.push(elemento);
//         };
//     };

//     return nuevaLista;
// }

// console.log(filtrar(frutas, elemento => elemento.length === 4)) // condicion()
// console.log(filtrar(frutas, elemento => elemento.length > 4)) // condicion()
// console.log(filtrar(frutas, elemento => elemento === "Mora" || elemento === "Banana")) // condicion()


// let fruta = "Duranzo"

// filter -> []
const elementosFilrados = frutas.filter(fruta => fruta.length === 4) 

// find -> elemento
const elementoEncontrado = frutas.find(fruta => fruta.length === 4) 

// forEach -> undefined // -> el forEach es un PROCEDIMIENTO (NO RETORNA)
// const recorrerLista = frutas.forEach(fruta => console.log(fruta))

// map -> [] // -> map es una FUNCION (retorna)
// const frutasFeas = frutas.map(fruta => fruta + " fea")

// reduce -> elemento -> el total de la acumulacion de todos elementos
// const numeros = [1,2,3,4,5,6,7]
// const total = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero
// }, 0)

// console.log(total)

// Funciones booleanas
// every -> boolean -> si todos los elementos son iguales
// const numeros = [1,1,1,2,1,1]
// const sonIguales = numeros.every(numero => numero === 1)

// // some -> boolean -> si alguno coincide
// const algunoCoincide = numeros.some(numero => numero === 2)

// console.log(algunoCoincide)

// Funcion de ordenamiento
// sort
// const meses = ["Ene", "Dic", "Nov", "Jul", "Feb"]
// const numeros = [1, 3, 20, 5, 1000, 4, 30]

// const mesesOrdenados = meses.sort()
// const numerosOrdenados = numeros.sort((a, b) => a - b) // a - b ascendente || b - a descendente

// console.log(numerosOrdenados)