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



/* --------------------------------- Login --------------------------------- */


const login = document.querySelector('.login');
const loginModal = document.getElementById('loginModal');

loginModal.addEventListener('click', () => {
    if (login.classList.contains('loginToggle')) {
        // Agrega la clase de animación de salida
        login.classList.add('logout');

        // Espera el tiempo de duración de la animación para eliminar la clase y ocultar el modal
        login.addEventListener('transitionend', () => {
            login.classList.remove('loginToggle', 'logout');
            login.style.display = 'none'; // Oculta el modal
        }, { once: true });// Para que solo se ejecuta una vez
    } else {
        login.style.display = 'grid'; // Muestra el modal
        login.classList.add('loginToggle');
    }
});


/* --------------------------------- Scroll --------------------------------- */

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

// Función para limitar la frecuencia de ejecución de una función
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Crea una versión optimizada de la función de scroll usando throttle
const handleScrollThrottled = throttle(handleScroll, 500);

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScrollThrottled);

// Agregar la clase 'fixedMenu' al elemento 'mainHead'
mainHead.classList.add('fixedMenu');
