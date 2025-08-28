/****** EVENTOS ******/
const d = document; // DOM
const w = window; // navegador
const c = console; // consola

// const $button = d.querySelector("button");

// const alerta = (saludo) => alert(`${saludo} desde una alertita`);

/*
    onclick -> hacemos click izquierdo
    contextmenu -> hacemos click derecho
    onclose -> cerramos algo (cuando le damos cruz a un modal)
    onmouseover -> pasamos el mouse por arriba de algo (parecido a un hover)
    onmouseout -> como el anterior pero cuando sacamos el mouse de arriba del elemento
    onscroll -> cuando hacemos scroll
    onresize -> cuando detecta que redimensiona el ancho de l navegador
    keydown -> cuando apretamos una tecla del teclado
    DOMContentLoaded -> Se recarga el navegador
    onsubmit -> cuando se clickea el elemento de submit del formulario
    onchange -> cuando detectas un cambio en el value de un elemento de formulario
*/

// .addEventListener()
// $button.addEventListener("click", () => alerta("Hola"));

// d.addEventListener("DOMContentLoaded", () =>
//   console.log("me gusta el pancito")
// );

// window.addEventListener("click", () => {
//     console.log("Plantando C4");
//     setTimeout(() => {
//         console.log("Bomb has been planted!")
//     }, 2000);
// })
// window.addEventListener("contextmenu", () => console.log("apliar mira"))

// window.addEventListener("keydown", (event) => {
//   switch (event.key) {
    
//     case "ArrowUp":
//       console.log("Mover arriba");
//       break;
//     case "ArrowDown":
//       console.log("Mover abajo");
//       break;
//     case "ArrowRight":
//       console.log("Mover derecha");
//       break;
//     case "ArrowLeft":
//       console.log("Mover izquierda");
//       break;
//     default:
//       return;
//   }
// });

// const $form = d.querySelector('form');
// const $username = d.querySelector('input[type="text"]')
// const $email = d.querySelector('input[type="email"]')

// const handleSubmit = (event) => {
//     event.preventDefault()

//     console.log({
//         username: $username.value,
//         email: $email.value
//     })
// } 

// $form.addEventListener("submit", handleSubmit);

// d.addEventListener("click", (event) => {
//     console.log("Hiciste click en", event.target)

//     if(event.target.matches(".una-seccion a")){
//         alert("A donde crees que vas wachin?")
//         event.preventDefault()
//     }
// })