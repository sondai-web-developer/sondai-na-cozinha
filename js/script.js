import menuMobile from "./animacoes/menu_mobile.js";
import mostrarDescricao from "./animacoes/mostrar_descricao.js";
import Slide from "./animacoes/slide.js";

menuMobile(); /*Abrir e fechar menu mobile*/
mostrarDescricao(); /*Abrir e fechar descricao*/
const slide = new Slide('[data-slide="lista"]', '[data-slide="wrapper"]');
slide.init();