function showCard() {
    const card = document.getElementById("card");
    const message = document.getElementById("message");
    card.style.display = "block";
    message.textContent = "Espero que te guste 💕";
}

function openCard() {
    window.open("carta.html", "_blank"); // Abre la página "carta.html" en una nueva pestaña.
}

// Esperamos que el documento esté completamente cargado antes de hacer cualquier acción
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // En la página principal (index.html)
    if (window.location.pathname.includes("index.html")) {
        const button = document.querySelector("button");

        // Al hacer clic en el botón, reproducimos la música y redirigimos
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evitamos cualquier acción predeterminada, como un formulario

            // Guardamos en localStorage que la música debe reproducirse
            localStorage.setItem("musicPlaying", "true");

            // Intentar iniciar la música
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Música iniciada.");
                }).catch(error => {
                    console.error("Error al iniciar la música:", error);
                    alert("Tu navegador está bloqueando la música. Por favor, habilítala.");
                });
            }

            // Redirigir a la siguiente página
            window.location.href = "carta.html";
        });
    }

    // En la página de la carta (carta.html)
    if (window.location.pathname.includes("carta.html")) {
        // Verificamos si la música debe seguir sonando
        if (localStorage.getItem("musicPlaying") === "true") {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Música iniciada en la siguiente página.");
                }).catch(error => {
                    console.error("Error al iniciar la música:", error);
                });
            }

            // Limpiar localStorage después de iniciar la música
            localStorage.removeItem("musicPlaying");
        }
    }
});

// Función para reproducir la música
function playMusic() {
    const audio = document.getElementById("background-music");

    // Intentar reproducir la música
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Música iniciada.");
        }).catch(error => {
            console.error("Error al iniciar la música:", error);
            alert("Tu navegador está bloqueando la música. Por favor, habilítala.");
        });
    }
}

// Función para abrir la carta y redirigir
function openCard() {
    window.location.href = "carta.html"; // Abre la página "carta.html" en la misma pestaña.
}
