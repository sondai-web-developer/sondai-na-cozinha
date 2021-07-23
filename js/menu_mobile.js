/*Abrir e fechar menu mobile*/
function menuMobile() {
  const iconeMenuMobile = document.querySelector('.icone_menu_mobile');
  const menuNav = document.querySelector('.menu_nav');

  function abrirFecharMenu() {
    iconeMenuMobile.classList.toggle('transformarIcone');
    menuNav.classList.toggle('mostrarItensMenu');
  }

  iconeMenuMobile.addEventListener('click', abrirFecharMenu);
}

menuMobile();