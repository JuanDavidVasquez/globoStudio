const nav = document.querySelector('.navLinks');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll("a");

burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
});


const mainHead = document.querySelector('.mainHead');

        // Mantiene la posición de scroll anterior
        let lastScrollTop = 0;

        // Función para verificar la dirección del scroll
        function handleScroll() {
            // Obtiene la posición de scroll actual
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Compara la posición actual con la anterior
            if (currentScrollTop > lastScrollTop) {
                // Scroll hacia abajo - ocultar
                mainHead.classList.add('hidden');
            } else {
                // Scroll hacia arriba - mostrar
                mainHead.classList.remove('hidden');
            }

            // Actualiza la posición de scroll anterior
            lastScrollTop = currentScrollTop;
        }

        // Escuchar el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Función para verificar el tamaño de la ventana
        function handleMediaQueryChange(event) {
            if (event.matches) {
                // Si el ancho de la ventana es menor o igual a 842px, agrega la clase
                mainHead.classList.add('fixedMenu');
            } else {
                // Si el ancho de la ventana es mayor a 842px, quita la clase
                mainHead.classList.remove('fixedMenu');
            }
        }

        // Crea un objeto MediaQueryList
        const mediaQuery = window.matchMedia('(max-width: 842px)');

        // Agrega un event listener para cambios en el estado de la media query
        mediaQuery.addListener(handleMediaQueryChange);

        // Llama a la función inmediatamente para verificar el estado inicial
        handleMediaQueryChange(mediaQuery);