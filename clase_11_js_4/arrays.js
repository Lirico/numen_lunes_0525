/*
    ARRAYS

    En Python se suele separar este tipo de colecciones en 2 subtipos.
    -> Listas
    -> Arreglos (arrays)

    JavaScript no hace diferenciacion directa de ambos subtipos. Sin embargo, sin nos ponemos en ortodoxos y queres especificamente
    un subtipo para determinada funcionalidad podemos fabricarlo.

    Lista -> Es una coleccion que puede arrancar vacia y se la va llenando conforme avanza el programa.
    Arreglo -> Arranca con un tamaño especifico, no se le cambia el tamaño a lo largo del programa pero al igual que con las listas
    si se pueden modificar sus elementos internos.

    Para JavaScript, estructuralmente no hay diferencia entre ambos conceptos. Por lo menos no nos dan dos estructuras diferentes.

    Un array es como una estanteria de libros.

    Estanteria = [ Libro1, Libro2, Libro3, Libro4, Libro5 ] // Los arrays poseen un indice
                     0        1       2       3       4

    console.log(Estanteria) -> toda la coleccion
    console.log(Estanteria[2]) -> Libro3

    ¿Para qué corno nos sirven estas estructuras?
    -> Podemos coleccionar varios valores sin necesidad de crear una variable para cada uno.
    -> Al encontrarse dentro de una coleccion lineal marcada por indices, podemos recorrer la coleccion usando bucles.
    -> Estas estructuras son claves para desarrollar colecciones en bases de datos (no relacionales).
*/

const estudiantes = ["Jony", "Joha", "Jero", "Franco", "Laura"]

// Observacion: La longitud del arreglo coincide con la posicion siguiente a la ultima del arreglo.

// Ejercicio 1:
// Basado en lo que vimos hasta ahora. Dime como agregar un alumno
// al final del arreglo.
// estudiantes[estudiantes.length] = "Patricia"
// estudiantes[estudiantes.length] = "Jorge"
// estudiantes[estudiantes.length] = "El que te co"

// Ejericio 2:
// Crear una funcion que reciba una lista de estudiantes y un estudiante
// y coloque al estudiante al final del arreglo.
// function agregarEstudiante(lista, estudiante){
//     lista[lista.length] = estudiante

//     console.log(lista)
// }

// agregarEstudiante(estudiantes, "Jorge")
// agregarEstudiante(estudiantes, "Pepe")

// Ejercicio 3:
// Crea una funcion que agregue un estudiante al comienzo del arreglo.
// function agregarEstudianteAlComienzoDeLaLista(lista, estudiante){
//     lista.reverse()
//     lista[lista.length] = estudiante
//     lista.reverse()

//     console.log(lista)
// }
// agregarEstudianteAlComienzoDeLaLista(estudiantes, "Pepe")

// Metodos nativos
// .push(elemento) -> agregar un elemento al final del array
// .unshift(elemento) -> agregar un elemento al comienzo del array
// .pop() -> Devolver/eliminar el ultimo elemento de un array
// .shift() -> Devolver/eliminar el primer elemento del array

// Ejercicio 4:
// Crear una funcion que reciba una lista y un estudiante y elimine
// dicho estudiante de la lista.
// function eliminarEstudiante(lista, estudiante){
//     const estudiantesFiltrados = []

//     for (let i = 0; i < lista.length; i++) {
//         if(lista[i] !== estudiante){
//             estudiantesFiltrados.push(lista[i])
//         }
//     }
//     return estudiantesFiltrados
// }

// console.log(eliminarEstudiante(estudiantes, "Laura"))



// En 2015 nos regalaron 2 bucles nuevos que tambien existen
// en otros lenguajes como Python.
// El forof -> Para recorrer arrays
// El forin -> Para recorrer objetos

// Ejercicio 5:
// Reahcer la funcion del ej. 4 con un forof.
function eliminarEstudiante(lista, estudiante){
    const estudiantesFiltrados = []

    for (const elemento of lista) {
        if(elemento !== estudiante){
            estudiantesFiltrados.push(elemento)
        }
    }
    return estudiantesFiltrados
}

// console.log(eliminarEstudiante(estudiantes, "Laura"))


// for(const monito of monitos)


// while -> for -> forof -> funciones de orden superior