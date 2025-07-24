/* 
    TIPOS DE DATOS

    Primitivos: Se puede acceder al valor directamente.
        -> Number (numero)
        -> String (cadena de texto)
        -> Boolean (Booleano)
        -> NaN -> not a number
        -> null
        -> undefined

    Compuestos: Se accede al valor por referencia.

    Tenemos un compando especial para poder depurar informacion.
    Depurar basicamente es revisar un espacio de memoria de la compu o
    un valor e imprimirlo en alguna instancia.
    Ese comando es: console.log() (en otros lenguajes suele llamarse print())
*/

32 // number
"hola", "32" // string
true, false // booleans

// Un algoritmo es un set de instrucciones que se ejectuan
// en una secuencia determinada.
// Esa secuencia puede ser linea (secuencial)
// O puede ser condicional

// var numero = 1

// var numero = 2


// console.log(2 + numero + numero + numero)



// Operadores Artimeticos
// Son operadores cuyo resultado operativo es un number.
// Suma +
// Resta -
// Multiplicacion *
// Division /
// Modulo %
// Incremento++
// Decremento--


// Operadores de comparacion
// Son operadores cuyo resultado operativo es un boolean.
// Mayor que >
// Menor que <
// Mayor o igual que >=
// Menor o igual que <=
// Igualdad estricta === (= = =)
// Igualdad no estricta ==
// Desigualdad estricta !== (! = =)
// Desigualdad no estricta != (! =)

// console.log(3 === "3") // Compara valor y tipo
// console.log(3 == "3") // Compara valor



// Operadores Logicos
// Son operadores cuyo resultado operativo es un boolean.
// Y -> AND -> &&
// O -> OR -> ||
// Negacion -> NOT -> !


// COERCION DE TIPOS DE DATO
/* 
    La coercion es un proceso por cual JS obliga a un tipo
    de dato a transformarse a otro para poder concretar
    una operacion.
*/

// // Concatenacion
// console.log(4 + "3")
// // Coercion
// console.log(4 - "3")
// // Coercion
// console.log(4 - "hola")


/////////////

// null -> Es una inexistencia manualmente colocada.
// undefined -> Es la inexistencia de valor por defecto de JS

// var color = null;

// var pato;

// console.log(pato)



/************** TAREA *************/
// 6 / "3" = 6 / 3 = 2
// "2" * "3" = 2 * 3 = 6
// 4 + 5 + "px" = 9 + "px" = "9px"
// "$" + 4 + 5 = "$4" + 5 = "$45"
// "4" - 2 = 4 - 2 = 2
// "4px" - 2 = NaN - 2 = NaN
// 7 / 0 = infinity
// 3>2>1 = true > 1 = false
// 12 + ""  = "12"
// "15" * 2  = 15 * 2 = 30
// "15" - "11" = 15 - 11 = 4
// undefined + 6 = NaN + 6 = NaN
// "Hello" + null = "Hellonull"
// null + 25 =    
// true + true = 1 + 1 = 2
// false + 10 = 0 + 10 = 10
// 5 && 2 =
// 2 && 5 =
// 5 || 0 =
// 0 || 5 =
// true && false =
// false || !false =
// !2 =
// "texto" || 0 =
// 2 || "prueba“ =