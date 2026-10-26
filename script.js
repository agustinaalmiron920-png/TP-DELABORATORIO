const frases = [
{
texto: "La lectura es un viaje que nunca termina.",
autor: "Anónimo"
},
{
texto: "Allí donde se queman los libros, se acaba por quemar a los hombres.",
autor: "Heinrich Heine"
},
{
texto: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
autor: "Miguel de Cervantes"
},
{
texto: "Aprender a leer es encender un fuego.",
autor: "Victor Hugo"
},
{
texto: "Un libro es un sueño que tienes en tus manos.",
autor: "Neil Gaiman"
}
];

// Capturar los elementos del HTML
const textoFrase = document.getElementById("texto-frase");
const autorFrase = document.getElementById("autor-frase");
const botonNuevaFrase = document.getElementById("btn-nueva-frase");
const botonCambiarTema = document.getElementById("btn-cambiar-tema");

// Función para mostrar una frase aleatoria
function mostrarNuevaFrase() {
const indiceAleatorio = Math.floor(Math.random() * frases.length);


textoFrase.textContent = frases[indiceAleatorio].texto;
autorFrase.textContent = "Autor: " + frases[indiceAleatorio].autor;


}

// Evento para cambiar la frase al hacer clic
botonNuevaFrase.addEventListener("click", mostrarNuevaFrase);

// Evento para activar o desactivar el modo oscuro
botonCambiarTema.addEventListener("click", function () {
document.body.classList.toggle("modo-oscuro");
});
