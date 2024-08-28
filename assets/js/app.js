document.addEventListener('DOMContentLoaded', () => {

    const btnTop = document.getElementById('btnTop');
  
    btnTop.addEventListener('click', () => {
        // Desplazamiento suave al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
  
  
  
      const barras = document.getElementById('barras');
      const navMenu = document.querySelector('.nav-menu');
      const barra1 = document.querySelector('.barra1');
      const barra2 = document.querySelector('.barra2');
      const barra3 = document.querySelector('.barra3');
  
      let isMenuOpen = false;
  
      barras.addEventListener('click', () => {
          if (isMenuOpen) {
              navMenu.classList.remove('show');
              navMenu.classList.add('hide');
              
              // Espera a que la animación termine antes de ocultar el menú
              navMenu.addEventListener('animationend', () => {
                  navMenu.style.display = 'none';
              }, { once: true });
  
          } else {
              navMenu.style.display = 'grid'; // Asegúrate de mostrar el menú primero
              navMenu.classList.remove('hide');
              navMenu.classList.add('show');
          }
  
          // Animaciones de las barras
          barra1.classList.toggle('animar1');
          barra2.classList.toggle('animar2');
          barra3.classList.toggle('animar3');
  
          isMenuOpen = !isMenuOpen;
      });
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  window.addEventListener("load", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
         /*  markers: true */
        }
      })
      .to("#headerImg", {
        scale: 7,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
      .to("#headerImg", {
        opacity: 0,
        ease: "power1.inOut"
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut"
        },
        "<"
      );
  });
  
  
  
  class Balloon {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
  
        this.balloonImage = new Image();
        this.balloonImage.src = 'http://127.0.0.1:5500/v2/img/globo_artistico_1_n.png';
  
        this.balloonImage.onload = () => {
            this.x = this.randomPosition(); // Posición X inicial del globo
            this.y = this.canvas.height + 100; // Posición Y inicial (fuera de la pantalla)
            this.speedY = Math.random() * 2 + 1; // Velocidad aleatoria de subida
            this.speedX = (Math.random() * 2 - 1) * 0.5; // Velocidad aleatoria en X (lateral)
            this.directionChange = Math.random() * 200 + 50; // Cambio de dirección en X cada cierta distancia
            this.distanceMoved = 0;
        };
  
        this.balloonImage.onerror = () => {
            console.error("No se pudo cargar la imagen del globo.");
        };
    }
  
    randomPosition() {
        return Math.random() * (this.canvas.width - 100); // Posición aleatoria en X
    }
  
    drawBalloon() {
        this.ctx.drawImage(this.balloonImage, this.x, this.y, 100, 100); // Dibujar globo
    }
  
    updatePosition() {
        this.y -= this.speedY; // El globo sube en Y
        this.x += this.speedX; // El globo se desplaza en X
  
        // Cambio de dirección del viento (X) después de cierta distancia
        this.distanceMoved += this.speedY;
        if (this.distanceMoved >= this.directionChange) {
            this.speedX = (Math.random() * 2 - 1) * 0.5; // Cambiar dirección aleatoriamente
            this.distanceMoved = 0; // Reiniciar contador de distancia
            this.directionChange = Math.random() * 200 + 50; // Nueva distancia para cambiar dirección
        }
  
        // Reiniciar cuando el globo sale de la pantalla
        if (this.y < -100) {
            this.y = this.canvas.height + 100; // Reinicia la posición en Y
            this.x = this.randomPosition(); // Nueva posición X
            this.speedY = Math.random() * 2 + 1; // Nueva velocidad de subida
            this.speedX = (Math.random() * 2 - 1) * 0.5; // Nueva velocidad lateral
        }
  
        // Asegurarse de que el globo no salga por los bordes en X
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > this.canvas.width - 100) {
            this.x = this.canvas.width - 100;
        }
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const balloonCanvas = document.getElementById('balloonCanvas');
    const balloons = [];
    const numberOfBalloons = 10; // Cantidad de globos
  
    // Crear múltiples globos usando for
    for (let i = 0; i < numberOfBalloons; i++) {
        balloons.push(new Balloon(balloonCanvas));
    }
  
    function animate() {
        const ctx = balloonCanvas.getContext('2d');
        ctx.clearRect(0, 0, balloonCanvas.width, balloonCanvas.height); // Limpiar el canvas
  
        // Actualizar y dibujar cada globo
        balloons.forEach(balloon => {
            balloon.updatePosition();
            balloon.drawBalloon();
        });
  
        requestAnimationFrame(animate); // Repetir animación
    }
  
    animate(); // Iniciar animación
  });
  
  
  /* balloon draggable */
  
  document.addEventListener('DOMContentLoaded', () => {
    const balloon = document.getElementById('balloonDraggable');
    const services = document.querySelectorAll('.service');
  
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
  
    balloon.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - balloon.offsetLeft;
        offsetY = e.clientY - balloon.offsetTop;
  
        balloon.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            // Mueve el globo
            balloon.style.left = `${e.clientX - offsetX}px`;
            balloon.style.top = `${e.clientY - offsetY}px`;
  
            // Detecta entrada y salida en los servicios
            services.forEach(service => {
                const serviceRect = service.getBoundingClientRect();
                const balloonRect = balloon.getBoundingClientRect();
  
                const canvas = service.querySelector('.balloon-service-canvas');
  
                if (
                    balloonRect.left < serviceRect.right &&
                    balloonRect.right > serviceRect.left &&
                    balloonRect.top < serviceRect.bottom &&
                    balloonRect.bottom > serviceRect.top
                ) {
                    service.classList.add('hovered');
                    if (!canvas) {
                      const newCanvas = document.createElement('canvas');
                      newCanvas.className = 'balloon-service-canvas';
                      newCanvas.width = service.offsetWidth;
                      newCanvas.height = service.offsetHeight;
                      service.appendChild(newCanvas);
                      
                      const ctx = newCanvas.getContext('2d');
                      const balloonsService = [];
                      const numberOfBalloonsService = 100;
  
                      // Crear múltiples globos
                      for (let i = 0; i < numberOfBalloonsService; i++) {
                        balloonsService.push(new Balloon(newCanvas));
                      }
  
                      function animateServices() {
                          ctx.clearRect(0, 0, newCanvas.width, newCanvas.height);
                          balloonsService.forEach(balloon => {
                              balloon.updatePosition();
                              balloon.drawBalloon();
                          });
                          requestAnimationFrame(animateServices);
                      }
  
                      animateServices();
                    }
                } else {
                    service.classList.remove('hovered');
                    if (canvas) {
                      canvas.remove();
                    }
                }
            });
        }
    });
  
    document.addEventListener('mouseup', () => {
        isDragging = false;
        balloon.style.cursor = 'grab';
    });
  });
  
  
  /*------------------------------------
              Select formulario
  -------------------------------------*/
  const openForm = document.getElementById('btnOpenForm');
  const cotizacionForm = document.getElementById('cotiza');
  
  document.addEventListener('DOMContentLoaded', () => {
    // Toggle para abrir el formulario
    openForm.addEventListener('click', () => {
      cotizacionForm.classList.toggle('openForm');
    });
  });
  
  // Cambia el contenido del segundo select dependiendo del primer select
  document.getElementById('first-select').addEventListener('change', function() {
    const secondSelect = document.getElementById('second-select');
    const selectedService = this.value;
  
    secondSelect.innerHTML = ''; // Limpia el segundo select
    let options = [];
  
    if (selectedService === 'balloons') {
      options = [
        { value: 'latex', text: 'Latex Balloons', price: 5 },
        { value: 'foil', text: 'Foil Balloons', price: 10 },
        { value: 'bubble', text: 'Bubble Balloons', price: 15 }
      ];
    } else if (selectedService === 'decoration') {
      options = [
        { value: 'arches', text: 'Balloon Arches', price: 50 },
        { value: 'centerpieces', text: 'Balloon Centerpieces', price: 30 }
      ];
    } else if (selectedService === 'delivery') {
      options = [
        { value: 'same-day', text: 'Same Day Delivery', price: 20 },
        { value: 'next-day', text: 'Next Day Delivery', price: 15 }
      ];
    }
  
    options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.dataset.price = option.price;
      opt.textContent = option.text;
      secondSelect.appendChild(opt);
    });
  
    secondSelect.style.display = options.length ? 'block' : 'none'; // Muestra u oculta el segundo select
  });
  
  // Manejo del botón "Add" para agregar productos a la tabla
  document.getElementById('addFormulario').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
  
    const firstSelect = document.getElementById('first-select');
    const secondSelect = document.getElementById('second-select');
    const quoteTable = document.getElementById('quoteTable');
    const tbody = quoteTable.querySelector('tbody');
  
    const selectedCategory = firstSelect.options[firstSelect.selectedIndex].text;
    const selectedProduct = secondSelect.options[secondSelect.selectedIndex].text;
    const selectedPrice = secondSelect.options[secondSelect.selectedIndex].dataset.price;
  
    // Validación de selección
    if (!selectedCategory || !selectedProduct || !selectedPrice) {
      alert('Please select both category and product.');
      return;
    }
  
    // Verifica si el producto ya existe en la tabla
    const existingRow = Array.from(tbody.querySelectorAll('tr')).find(row => {
      const productCell = row.querySelector('td:nth-child(2)').textContent;
      return productCell === selectedProduct;
    });
  
    if (existingRow) {
      // Incrementa la cantidad si el producto ya existe
      const quantityCell = existingRow.querySelector('.quantity');
      quantityCell.textContent = parseInt(quantityCell.textContent) + 1;
    } else {
      // Crea una nueva fila si el producto no existe
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${selectedCategory}</td>
        <td>${selectedProduct}</td>
        <td>$${selectedPrice}</td>
        <td class="quantity">1</td>
        <td>
          <button class="increase" title="Increase Quantity"><i class="fas fa-chevron-up"></i></button>
          <button class="decrease" title="Decrease Quantity"><i class="fas fa-chevron-down"></i></button>
          <button class="delete" title="Delete Item"><i class="fas fa-trash"></i></button>
        </td>
      `;
      tbody.appendChild(newRow);
    }
  
    // Muestra la tabla si está oculta
    quoteTable.style.display = 'table';
  });
  
  // Event delegation para manejar clicks en los botones de la tabla
  document.getElementById('quoteTable').addEventListener('click', function(event) {
    const target = event.target.closest('button');
    if (!target) return; // Verifica si realmente fue un botón lo que se clicó
  
    const row = target.closest('tr');
    const quantityCell = row.querySelector('.quantity');
    let quantity = parseInt(quantityCell.textContent);
  
    // Maneja el botón de incrementar
    if (target.classList.contains('increase')) {
      quantityCell.textContent = quantity + 1;
    }
  
    // Maneja el botón de disminuir
    if (target.classList.contains('decrease')) {
      if (quantity > 1) {
        quantityCell.textContent = quantity - 1;
      } else {
        row.remove(); // Elimina la fila si la cantidad es 0
      }
    }
  
    // Maneja el botón de eliminar
    if (target.classList.contains('delete')) {
      row.remove();
    }
  
    // Oculta la tabla si ya no hay filas
    if (!document.querySelector('#quoteTable tbody').children.length) {
      quoteTable.style.display = 'none';
    }
  });
  