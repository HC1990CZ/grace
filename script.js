// Efecto de pincel
document.addEventListener('mousemove', function (e) {
    createPaintTrail(e.pageX, e.pageY);
});

function createPaintTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('paint-trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    trail.style.backgroundColor = getRandomColor();

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33FFF5'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Efecto parallax
window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;

    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');

    parallax1.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    parallax2.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// Animación de carga
window.onload = function () {
    setTimeout(function () {
        document.getElementById('loadingOverlay').style.display = 'none';
    }, 3000);
};








// Función para lanzar confeti desde la parte superior
function confetiDesdeArriba() {
    confetti({
        particleCount: 100,
        angle: 90, // Dirección hacia abajo
        spread: 70,
        origin: { x: 0.5, y: 0 }, // Parte superior (centro)
    });
}

// Función para lanzar confeti desde la parte inferior
function confetiDesdeAbajo() {
    confetti({
        particleCount: 100,
        angle: -90, // Dirección hacia arriba
        spread: 70,
        origin: { x: 0.5, y: 1 }, // Parte inferior (centro)
    });
}

// Función para lanzar confeti desde la izquierda
function confetiDesdeIzquierda() {
    confetti({
        particleCount: 100,
        angle: 0, // Dirección hacia la derecha
        spread: 70,
        origin: { x: 0, y: 0.5 }, // Parte izquierda (centro)
    });
}

// Función para lanzar confeti desde la derecha
function confetiDesdeDerecha() {
    confetti({
        particleCount: 100,
        angle: 180, // Dirección hacia la izquierda
        spread: 70,
        origin: { x: 1, y: 0.5 }, // Parte derecha (centro)
    });
}

// Lanza confeti desde todas las direcciones automáticamente
function lanzarConfetiEnTodasDirecciones() {
    confetiDesdeArriba();
    confetiDesdeAbajo();
    confetiDesdeIzquierda();
    confetiDesdeDerecha();
}

// Lanza confeti al cargar la página
window.onload = function () {
    setTimeout(() => {
        lanzarConfetiEnTodasDirecciones();
    }, 500); // Lanza confeti después de 0.5 segundos
};

// Lanza confeti al hacer clic en el botón (opcional)
document.getElementById("confetti-button").addEventListener("click", lanzarConfetiEnTodasDirecciones);

