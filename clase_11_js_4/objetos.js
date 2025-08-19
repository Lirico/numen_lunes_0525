/* 
    Son una coleccion de estructuras "clave: valor" que buscar
    representar un elemento de la realidad o de la ficcion.

    objeto -> auto
    Objeto -> producto
    Objeto -> persona
    objeto -> personaje

    Los objetos se componende lo que llamamos propiedades y metodos.
    A las propiedades se les asginan valores primitvos o compuestos.
    A los metodos se les asginan funciones.

    En pocas palabras los metodos son propiedades ejectuables.

    Estas propiedades y metodos son al, al fin y al cabo, variables
    pero internas de un objeto.
*/

// const auto = {
//     // Propiedades
//     marca: "Peugeot",
//     modelo: 206,
//     color: "rojo",

//     // Metodos
//     frenar: function() {
//         return "Iiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
//     },
//     arrancar: function() {
//         return "Brummmmmmmmmmmm"
//     }
// }

// Nosotros accediamos a elementos de un array por medio de [].
// Como accedemos a un valor alojado en una propieadad de un objeto?

// Hay 2 formas:
// -> notacion de punto (dotwalking)
// -> notacion de corchetes (bracket notation)

// Notacion de puntos
// console.log(auto.color)
// console.log(auto.marca)
// console.log(auto.frenar())

// console.log('------------------')

// Notacion de corchetes
// console.log(auto["color"]) // Acceso literales
// console.log(auto["arrancar"]()) // Acceso literal
// auto[propiedad] // Acceso dinamico



// Ejercicio 1:
// Crear una funcion que agregue una propiead y un valor a un objeto.
// function agregarPropiedad(objeto, propiedad){
//     objeto[propiedad] = "127km"

//     console.log(objeto)
// }

// agregarPropiedad(auto, "aceleracion")

// Ejercicio 2: 
// Crear una funcion que elimine una propiedad de un objeto
// function eliminarPropiedad(objeto, propiedad){
//     delete objeto[propiedad]

//     console.log(objeto)
// }

// eliminarPropiedad(auto, "marca")

// Recuerda el forin?

// for (const propiedad in auto) {
//     console.log(auto[propiedad])
// }


// Preguntar si el objeto tiene la propiedad tal
// if(auto.hasOwnProperty("manolo")){
//     console.log("La propiedad existe en el objeto")
// } else {
//     console.log("Propiedad inexistente")
// }