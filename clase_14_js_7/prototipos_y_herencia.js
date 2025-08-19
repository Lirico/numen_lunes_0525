/* 
    PROTOTIPOS Y HERENCIA
*/

/* 
    Tipos de datos primitivos -> Se accede al valor de manera directa.
    string
    number -> 32 3.17 -4 infinity -infinity NaN
    boolean
    null 
    undefined
    symbol -> ES6 -> 2015 -> Symbol()

    Tipos de datos compuestos -> Se accede a los valores por referencia.
    object
*/

// console.log(typeof 32)

// console.log(typeof "hola")

// console.log(typeof true)

// console.log(typeof null)

// console.log(typeof undefined)

// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof function(){})


// let cadena = new String('hola mundo')
// let numero = new Number(32)

// const object = {}

// console.log(cadena)
// console.log(numero)
// console.log(object)


// Tengo un array -> reverse() -> [1,2,3] -> [3,2,1]
// Es un tipo de dato mutable

// Tengo un string -> "123" -> "321" -> reverse() ? -> NO
// Tipo de dato inmutable

// let numeros = "123"

// console.log(numeros.split("").reverse().join(""))

// Insertar una funcion nueva en el prototipo
String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}

let cadena = "123"
let nombre = "Pepe"

// console.log(cadena.reverse())
// console.log(nombre.reverse())


Array.prototype.filtrar = function(condicion) {
    const newArray = []
    for (const element of this) {
        if(condicion(element)){
            newArray.push(element)
        }
    }

    return newArray
}

const numeros = [1,2,3,4,5,6]

// console.log(numeros.filtrar((num) => num > 3))

/* 
    Palabra reservada -> this 

    En la mayorias de los lenguajes que yo conozco al menos
    esa palabra se denomina "self".

    Esta palabra reservada se utiliza dentro de objetos
    para hacer referencia al scope interno de dicho objeto.

    De esta manera se pueden rastrear propiedades como si
    se encontraran en el ambito global.

    Para ponerlo en criollo, el this ancla la busqueda de una 
    variable al interior del ambito de un objeto.
*/

// let nombre = "Bienvenido al ambito global"

// const objeto = {
//     nombre: "Contexto del objeto",
//     imprimir: function() {
//         console.log(this.nombre)
//     }
// }

// const objeto2 = {
//     nombre: "Contexto del objeto 2",
//     imprimir: objeto.imprimir
// }

// objeto2.imprimir()


// FUNCIONES CONSTRUCTORAS

function Pokemon(nombre, tipo, frase){
    // Atributos
    this.nombre = nombre,
    this.tipo = tipo
    this.frase = function() {
        return frase
    }
}

const pikachu = new Pokemon('Pikachu', 'Electrico', 'Pika pika')
const squirtle = new Pokemon('Squirtle', 'Agua', 'Vamo a calmarno')
const charmander = new Pokemon('Charmander', 'Fuego', 'Char char charmander')
const bulbasaur = new Pokemon('Bulbasaur', 'Planta/veneno', 'asdyasudia9sd6789as7d89a8s9d')


// console.log(pikachu)
// console.log(squirtle)
// console.log(charmander)
// console.log(bulbasaur)

// console.log(pikachu.frase())
// console.log(squirtle.frase())
// console.log(charmander.frase())
// console.log(pikachu.frase())
// console.log(charmander.frase())
// console.log(pikachu.frase())
// console.log("Y rascate boludo!")