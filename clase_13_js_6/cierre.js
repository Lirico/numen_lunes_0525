

/* 
    CIERRE 

    Es una funcion que retorna otra funcion, y que para poder acceder al retorno
    de la funcion interna (o atrapada), es necesario referenciar a la funcion externa.
*/

// function saludar(saludo){
//     return function(nombre) {
//         return `${saludo} ${nombre}`
//     }
// }

// const hola = saludar("Hola")
// const adios = saludar("Adios")
// const che = saludar("Che,")

// console.log(hola("Franco"))
// console.log(hola("Jero"))
// console.log(hola("Joha"))
// console.log(hola("Jony"))
// console.log(adios("Franco"))
// console.log(adios("Jero"))
// console.log(adios("Joha"))
// console.log(adios("Jony"))
// console.log(che("Franco"))
// console.log(che("Jero"))
// console.log(che("Joha"))
// console.log(che("Jony"))

/* 
    leo -> hola

    ƒ () {
        return `wiki`
    }
*/

/* 
    saludar()

    ƒ (nombre) {
        return `${saludo} ${nombre}`
    }
*/



// EL DILEMA DEL CONTADOR

function incrementar(){
    var contador = 0;

    return function(){
        return contador += 1
    }
}

const add = incrementar()

function imprimir(){
    console.log(add())
}

