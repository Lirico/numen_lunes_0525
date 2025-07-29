/* 
    SCOPE (ambito/alcance)

    En la programacion en general cuando creamos bloques como funciones o estructuras de control,
    las instrucciones que colocamos dentro se encuentran en un ambito distino a si las colocamos
    sueltas en la hoja de JS.
    Esto puede afectar el alcance que nuestras funciones tienen para acceder a las variables que se 
    encuentren declaradas en dicho ambito.

    Hoisting / Elevacion

    // Cuando JS no puede resolver un problema de alcance
    // eleva la sentencia al ambito global para que pueda
    // ser accedida.

    // let -> permitir
    // const -> constante
*/



// const musica = "Pop" // Ambito global


// function casa() { // Ambito local
//     const musica = "Rock"
// }


// casa()

// musica = "Jazz" // Ambito global
// console.log(musica) 




// ¿Cuando usamos let?
// Cuando el valor asignado cambiara a lo largo del programa
// Ej.
let contador = 0;

// ¿Cuando usamos const?
// Cuando un valor primitivo no cambiara a lo largo del programa
const PI = 3.1416812783
const E = 2.16128371892

// Cuando queres proteger tipo de dato compuesto
// Ej. objetos, arreglos o funciones.
const sumar = function(a, b) {
    
}
// Cuando quiero guardar una referencia a un elemento HTML
const section = document.querySelector('section')
