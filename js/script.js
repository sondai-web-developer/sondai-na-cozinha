import menuMobile from "./animacoes/menu_mobile.js";
import mostrarDescricao from "./animacoes/mostrar_descricao.js";
import logoScrollTop from "./animacoes/logo-scroll-top.js";
import scrollSuave from "./animacoes/scroll-suave.js";
import animacaoScroll from "./animacoes/anima-scroll.js";

menuMobile(); /*Abrir e fechar menu mobile*/
mostrarDescricao(); /*Abrir e fechar descricao*/
logoScrollTop(); /*Ao clicar na logo, o scroll vertical irá deslizar até o topo do site*/
scrollSuave(); /*Ao clicar em algum item do menu, o site irá deslizar até a sessão correspondente*/
animacaoScroll(); /*Alguns elementos irão aparecer só quando o scroll estiver próximo */

const agora = new Date();
const anoAtual = document.querySelector('[data-ano="anoAtual"]');
anoAtual.innerText = agora.getFullYear();
