export default function logoScrollTop() {
  const logos = document.querySelectorAll('[data-scroll-top="logo"]');

  function scrollTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  logos.forEach((logo) => {
    logo.addEventListener('click', scrollTop);
  });
}