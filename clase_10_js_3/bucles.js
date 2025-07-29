

/********* BUCLES/CICLOS/LOOPS **********/
/* 
    Son estructuras de control de flujo que permiten ejecutar repeticiones de
    instrucciones hasta que una condicion deja de cumplirse.
*/

/* 
    ¿Que tipos de bucles nos ofrece JS? 

    -> while (mientras)
    -> do while (hace mientras)
    -> for (para)
*/

// var contador = 0;

// while(contador < 10){
//     console.log(contador + " while")

//     contador++
//     // contador = contador + 1
// }

// do {
//     console.log(contador + " do while")
//     contador++
// } while (contador < 10);



// for (var contador = 0; contador < 10; contador++) {
//     console.log(contador)
// }


/* 
    Pablo se encuentra en medio de un apocalipsis zombie. Intentado refugiarse encuentra un hospital abandonado.
    Sin pensarlo 2 veces decide entrar. El hospital no tiene luz pero, afurtunadamente, Pablo posee una linterna
    con suficiente bateria.
    Al girar un pasillo encuentra una habitacion que podria tal vez contener comida. Pero tambien sabe
    que dentro de dicha habitacion podrian haber zombies.
    Duda un segundo si entrar o no pero la pancita le cruje, asi que decide abrir la puerta. Al entrar
    habia 10 zombies comiendo un cadaver. Sin embargo esto no asusta del todo a Pablo ya que tiene en el bolsillo
    una pistola con N balas. Tambien sabe que pose el cheet para poder matar un zombie de un tiro a la cabeza
    aunque dicho cheet no le permite matar 2 zombies con la misma bala.

    Programar una funcion que represente esta circustancia de tal modo que si la cantidad de balas alcanza o
    sobra para matar a los zombies arroja un mensaje de mision cumplida y sino de mision fallida.
*/

// balas -> N
// zombies -> 10

// var balas = Math.round(Math.random() * 20)

// for(var zombies = 10; zombies > 0; zombies--){
//     balas--
// }

// if(balas > -1){
//     console.log("You survived, mission complete!")
// } else {
//     console.log("You died, mission failed!")
// }