document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navigation a, .logo a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(targetId); // Busca el elemento con el ID
            
            if (targetElement) {
                let offset = targetElement.offsetTop - document.querySelector('.header').offsetHeight; // Calcula el desplazamiento con respecto a la parte superior de la página, teniendo en cuenta la altura del encabezado

                if (targetId === 'home') {
                    offset = 0; // Ajusta el desplazamiento si el destino es 'home'
                }

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth' // Desplazamiento suave
                });
            }
        });
    });

    // Cierra el menú al hacer clic fuera de él, excluyendo el botón de alternancia del menú
    document.addEventListener('click', function(event) {
        const menu = document.querySelector('.navigation');
        const toggle = document.getElementById('toggle');
        const label = document.querySelector('label[for="toggle"]');

        if (!menu.contains(event.target) && event.target !== toggle && event.target !== label) {
            toggle.checked = false;
        }
    });
});

//registro
/*https://api.whatsapp.com/send?phone=(codigo pais)(codigo de area)(numero sin el 15)&text=*/
/* Espacio : %20  ``*/


/* Traer los inputs */
/* Crear funcion añadiendo el valor correspondiente a la variable mensaje */

const form = document.querySelector('.colaboracion-container form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const nombre = document.getElementById('nombre').value;
                const apellidos = document.getElementById('apellidos').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const oficio = document.getElementById('oficio').value;
                const experiencia = document.getElementById('experiencia').value;
                const inicio = document.getElementById('inicio').checked ? 'Sí' : 'No';
                const area = document.getElementById('area').value;

                const message = `Nombre: ${nombre} ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nOficio: ${oficio}\nExperiencia: ${experiencia}\nComenzando a laborar: ${inicio}\nÁrea a desempeñarse: ${area}`;
                const encodedMessage = encodeURIComponent(message);
                //Remplaza el numero
                const url = `https://api.whatsapp.com/send?phone=+529933837637&text=${encodedMessage}`;
                window.open(url, '_blank');
            });

