export default function animacaoScroll() {
  const elementos = document.querySelectorAll('[data-scroll="anima"]');
  const windowMetade = window.innerHeight * 0.5;

  function animaScroll() {
    elementos.forEach((elemento) => {
      const elementoTop = elemento.getBoundingClientRect().top;
      const isElementoVisible = (elementoTop - windowMetade) < 0;
      if (isElementoVisible)
        elemento.classList.add('mostrarElemento');
    })
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}