document.addEventListener('DOMContentLoaded', function () {

    var ls = gsap.timeline();
    // Elementos relacionados con los descuentos
    const descuentos = document.querySelectorAll('.bar__descuentos'); // Selecciona todos los elementos con la clase 'bar__descuentos'
    const elementos = ['PREGUNTA POR TU DESCUENTO!🔥', '📦YA CASI SE AGOTAN!!', 'RECIBE UN PDF GRATIS POR LA COMPRA🎁']; // Array con los nuevos textos

    function agregarElementos() {
        // Recorremos todos los elementos seleccionados
        descuentos.forEach(descuento => {
            // Limpiar el contenido del contenedor (eliminando cualquier hijo)
            descuento.innerHTML = ''; 

            // Recorrer el array y agregar cada elemento al contenedor
            elementos.forEach(texto => {
                const p = document.createElement('p'); // Crear un nuevo elemento <p>
                p.classList.add('descuentos'); // Agregar la clase 'descuentos'
                p.textContent = texto; // Establecer el texto dentro del <p>
                descuento.appendChild(p); // Agregar el <p> al contenedor
            });
        });
    }

    agregarElementos(); // Ejecutar la función de agregar elementos

    // Elementos de la galería de imágenes
    const imagenPrincipal = document.querySelector('.imagen__principal img'); // Selecciona el <img> dentro de imagen__principal
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    const img3 = document.querySelector('.img3');

    function validacion() {
        // Verificar si las imágenes existen antes de agregarles los eventos
        if (img1 && img2 && img3) {
            // Agregar el evento de clic a img1
            img1.addEventListener('click', function () {
                imagenPrincipal.src = img1.src; // Cambia la imagen principal a img1
            });

            // Agregar el evento de clic a img2
            img2.addEventListener('click', function () {
                imagenPrincipal.src = img2.src; // Cambia la imagen principal a img2
            });

            // Agregar el evento de clic a img3
            img3.addEventListener('click', function () {
                imagenPrincipal.src = img3.src; // Cambia la imagen principal a img3
            });
        }
    }

    validacion(); // Ejecutar la validación


    let isUnlock = true;  // Estado de desbloqueo del parallax
    const body = document.querySelector('.body');
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

        buttonClose.addEventListener('click', function(){
            if(!isUnlock){
                parallax.style.display = 'none';
                console.log('click');
                
                ls.to(parallax, {
                    x:-1200,
                    duration: 1,
                    stagger: 0.3
                })
            }
        })
    }

    parallaxFuncionando(); // Ejecutar la función de parallax

    /* ARRAY DE GUSTOS */

    const nombresConLeyenda = [
        "Sebastian L. y a otras personas les gusta este producto",
        "Ana M. y a otras personas les gusta este producto",
        "Carlos P. y a otras personas les gusta este producto",
        "Lucía R. y a otras personas les gusta este producto",
        "Pedro G. y a otras personas les gusta este producto",
        "Marta V. y a otras personas les gusta este producto",
        "José F. y a otras personas les gusta este producto",
        "Laura T. y a otras personas les gusta este producto",
        "Luis J. y a otras personas les gusta este producto",
        "María D. y a otras personas les gusta este producto",
        "David C. y a otras personas les gusta este producto",
        "Elena S. y a otras personas les gusta este producto",
        "Raúl H. y a otras personas les gusta este producto",
        "Patricia B. y a otras personas les gusta este producto",
        "Andrés N. y a otras personas les gusta este producto",
        "Sandra K. y a otras personas les gusta este producto",
        "Javier M. y a otras personas les gusta este producto",
        "Carmen Q. y a otras personas les gusta este producto",
        "Felipe Z. y a otras personas les gusta este producto",
        "Natalia L. y a otras personas les gusta este producto",
        "Diego A. y a otras personas les gusta este producto",
        "Inés P. y a otras personas les gusta este producto",
        "Antonio E. y a otras personas les gusta este producto",
        "Marina R. y a otras personas les gusta este producto",
        "Alberto I. y a otras personas les gusta este producto"
    ];

    const textoIzquierda = document.querySelector('.texto__izquierda');
    let indiceActual = 0;

    // Función que muestra el siguiente nombre
    function mostrarNombre() {
        // Limpiamos el contenedor antes de agregar el nuevo nombre
        textoIzquierda.innerHTML = ''; 
        
        // Crear un nuevo <p> y agregar el nombre correspondiente
        const pNombres = document.createElement('p');
        pNombres.classList.add('texto__izquierda'); // Añadir clase si es necesario
        pNombres.textContent = nombresConLeyenda[indiceActual]; // Establecer el texto del <p>
        
        // Agregar el <p> al contenedor
        textoIzquierda.appendChild(pNombres);

        // Actualizar el índice para el siguiente nombre
        indiceActual = (indiceActual + 1) % nombresConLeyenda.length; // Ciclo a través del array
    }

    // Mostrar el primer nombre inmediatamente
    mostrarNombre();

    // Cambiar el nombre cada 10 segundos
    setInterval(mostrarNombre, 4000); // 10000 ms = 10 segundos  
})

