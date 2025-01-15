window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;

    // Obtener los elementos parallax
    var parallax1 = document.getElementById('parallax1');
    var parallax2 = document.getElementById('parallax2');

    // Ajustar la posición de fondo para el efecto parallax
    parallax1.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    parallax2.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
