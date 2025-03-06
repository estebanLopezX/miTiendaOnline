document.addEventListener('DOMContentLoaded', function () {

    
    var ls = gsap.timeline();

    let isUnlock = true;  // Estado de desbloqueo del parallax
    const parallax = document.querySelector('.parallax');
    const menu = document.querySelector('.menu__ul'); // Botón para abrir el parallax
    const buttonClose = document.querySelector('.button__close');

    function parallaxFuncionando() {
        // Verificar si el parallax está desbloqueado
        if (isUnlock && parallax && menu) {
            menu.addEventListener('click', function (e) {
                e.stopPropagation(); // Evitar que el clic en el menú se propague al body
                
                parallax.style.display = "block"; // Hacer visible el parallax
                parallax.style.left = "-1200px"; // Inicialmente fuera de la vista
                isUnlock = false; // Cambiar el estado de desbloqueo

                // Crear una nueva línea de tiempo de GSAP para animación


                // Animar el parallax para que entre desde la izquierda
                ls.to(parallax, {
                    x: 1200, // Mueve el parallax a su posición original
                    duration: 1,
                    stagger: 0.3
                });
            });
        }

        buttonClose.addEventListener('click', function () {
            if (!isUnlock) {
                parallax.style.display = 'none';
                console.log('click');

                ls.to(parallax, {
                    x: -1200,
                    duration: 1,
                    stagger: 0.3
                })
            }
        })
    }

    parallaxFuncionando(); // Eje
})
