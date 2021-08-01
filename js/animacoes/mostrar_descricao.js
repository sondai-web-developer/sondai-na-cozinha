export default function mostrarDescricao() {
  const iconeOrganico = document.querySelector('[data-descricao="icone_organico"');
  const iconeReceitas = document.querySelector('[data-descricao="icone_receitas"');
  const iconeCursos = document.querySelector('[data-descricao="icone_cursos"');

  const textoOrganico = document.querySelector('[data-descricao="texto_organico"');
  const textoReceitas = document.querySelector('[data-descricao="texto_receitas"');
  const textoCursos = document.querySelector('[data-descricao="texto_cursos"');

  function abrirFecharDescricaoOrganico() {
    iconeOrganico.classList.toggle('mudarIcone');
    textoOrganico.classList.toggle('mostrarTexto');
  }

  function abrirFecharDescricaoReceitas() {
    iconeReceitas.classList.toggle('mudarIcone');
    textoReceitas.classList.toggle('mostrarTexto');
  }

  function abrirFecharDescricaoCursos() {
    iconeCursos.classList.toggle('mudarIcone');
    textoCursos.classList.toggle('mostrarTexto');
  }

  iconeOrganico.addEventListener('click', abrirFecharDescricaoOrganico);
  iconeReceitas.addEventListener('click', abrirFecharDescricaoReceitas);
  iconeCursos.addEventListener('click', abrirFecharDescricaoCursos);
}