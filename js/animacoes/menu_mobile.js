export default function menuMobile() {
  const iconeMenuMobile = document.querySelector('[data-menu-mobile="icone"]');
  const menuNav = document.querySelector('[data-menu-mobile="lista"]');

  function abrirFecharMenu() {
    iconeMenuMobile.classList.toggle('transformarIcone');
    menuNav.classList.toggle('mostrarItensMenu');
  }

  iconeMenuMobile.addEventListener('click', abrirFecharMenu);
}