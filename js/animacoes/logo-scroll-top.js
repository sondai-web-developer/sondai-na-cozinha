export default function logoScrollTop() {
  const logo = document.querySelector('[data-scroll-top="logo"]');

  function scrollTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  logo.addEventListener('click', scrollTop);
}