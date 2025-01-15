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
