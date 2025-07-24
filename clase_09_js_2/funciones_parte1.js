
/******* FUNCIONES *******/

/* 
    Es un tipo de estructura algoritmica que nos permite encapusular
    instrucciones y ejecutarlas cuando querramos y cuantas veces
    querramos.

    Las funciones pueden o no retornar valores.
    Si retornan valores comunmente se las denomina FUNCIONES.
    Si no retornan valores se las denomina PROCEDIMIENTOS.

    Para ambos casos usamos la reservada "function"

    Las funciones pueden recibir valores y estas los almacenan en
    variables internas.
    Esto permite que cada invocacion de una funcion pueda devolver
    diferentes resultados.
*/

function sumar(a, b){
    return a + b
}
// catetoA
function potencia2(x){
    return x ** 2
}
// catetoB
function potencia2(x){
    return x ** 2
}

function raizCuarada(x){
    return x ** 1/2
}

// (a^2 + b^2)rq = c

// catetoA = 4
// catetoB = 5

function teoremaDePitagoras(catetoA, catetoB){
    return raizCuarada(sumar(potencia2(catetoA), potencia2(catetoB)))
}