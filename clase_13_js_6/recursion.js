/* 
    RECURSION

    Consiste en una funcion que se llama a si misma una y otra vez hasta que una condicion deja de cumplirse.
    Para ello el parametro recibe modificaciones en cada llamado.
    Ejemplo: Parametro original -> numero, parametro en el llamado interno -> numero - 1

    Datos interesantes:
    La recursion es 3 veces mas lenta que un bucle.
    Pero ...
    Es mas elegante y mas flexible.
*/

// Fabricar una funcion recursiva que genere una cuenta regresiva de 3 a 0.

// function cuentaRegresiva(numero){

//     console.log(numero)

//     if(numero > 0){
//         cuentaRegresiva(numero - 1)
//     }
// }

// cuentaRegresiva(3)


// SECUENCIA DE FIBONACCI
// f(n) = f(n-1) + f(n-2) donde n >= 2.


const f = n => {
    if(n < 2) return n
    
    return f(n-1) + f(n-2)
}




// console.log(f(0)) // 0
// console.log(f(1)) // 1
// console.log(f(2)) // f(2-1) + f(2-2) = 1 + 0 = 1
// console.log(f(3)) // f(3-1) + f(3-2) = f(2-1) + f(2-2) + 1 = 1 + 0 + 1 = 2
// console.log(f(4)) // f(4-1) + f(4-2) = (f(3-1) + f(3-2)) + (f(2-1) + f(2-2)) = f(2-1) + f(2-2) + 1 + 1 + 0 = 1 + 0 + 1 + 1 + 0 = 3
// console.log(f(10))