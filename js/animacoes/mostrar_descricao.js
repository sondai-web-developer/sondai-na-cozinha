export default function mostrarDescricao() {
  const listaIconesDescricao = document.querySelectorAll("[data-descricao=icone]");
  const listaTextosDescricao = document.querySelectorAll("[data-descricao=texto]");

  function mostrarTexto(index) {
    listaIconesDescricao[index].classList.toggle('mudarIcone');
    listaTextosDescricao[index].classList.toggle('mostrarTexto');
  }

  listaIconesDescricao.forEach((item, index) => {
    item.addEventListener('click', () => {
      mostrarTexto(index);
    });
  });

}