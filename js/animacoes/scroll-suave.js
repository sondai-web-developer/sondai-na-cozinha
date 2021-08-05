export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a');
  const menuHeight = document.querySelector('.menu').offsetHeight;

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    const topo = section.offsetTop - menuHeight;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}