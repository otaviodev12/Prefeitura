
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});


//botao 1//
const botao = document.getElementById("bt1");
bt1.addEventListener("mouseenter", function () {
      bt1.style.backgroundColor = "lightgreen"; // Verde ao passar o 
          });

          botao.addEventListener("mouseleave", function () {
            bt1.style.backgroundColor = "yellow"; 
    });

//botao2

const botao2 = document.getElementById("bt2");

bt2.addEventListener("mouseenter", function () {
      bt2.style.backgroundColor = "lightgreen"; // Verde ao passar o 
          });

          botao2.addEventListener("mouseleave", function () {
            bt2.style.backgroundColor = "yellow"; 
    });

    //botao3 
    const botao3 = document.getElementById("bt3");

bt3.addEventListener("mouseenter", function () {
      bt3.style.backgroundColor = "lightgreen"; // Verde ao passar o 
          });

          botao3.addEventListener("mouseleave", function () {
            bt3.style.backgroundColor = "yellow"; 
    });

    //botao4

    const botao4 = document.getElementById("bt4");
        bt4.addEventListener("mouseenter", function () {
      bt4.style.backgroundColor = "lightgreen"; // Verde ao passar o 
          });

          botao4.addEventListener("mouseleave", function () {
            bt4.style.backgroundColor = "yellow"; 

    });








     let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      slides[index].style.display = 'block';
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    }

    // Botões
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Automático
    setInterval(nextSlide, 3000); // Troca a cada 3 segundos

    // Mostrar primeiro slide ao carregar
    showSlide(slideIndex);








