const mensajes = [
    "Hola",
    "Allie",
    "Tú",
    "Duo",
    "te quiere mucho 💖"
];

const texto = document.getElementById("texto");

let indice = 0;

function mostrarMensaje() {

    texto.textContent = mensajes[indice];

    indice++;

    if (indice < mensajes.length) {
        setTimeout(mostrarMensaje, 1500);
    }
}

mostrarMensaje();

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("sparkle");
    corazon.innerHTML = "💗";

    corazon.style.left =
        Math.random() * window.innerWidth + "px";

    corazon.style.fontSize =
        (Math.random() * 20 + 20) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);