
/* SISTEMA DE TELAS */

function trocarTela(numero) {

    const telas = document.querySelectorAll(".tela");

    if (numero < 0 || numero >= telas.length) {
        return;
    }

    // Esconde todas as telas.
    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    // Mostra a tela escolhida.
    telas[numero].classList.add("ativa");

    // Volta para o início da página.
    window.scrollTo(0, 0);

    // troca as partículas dependendo da tela

const coracoes = document.querySelector(".coracoes");
const telaFavoritos = document.querySelector(".favoritos");

if (telaFavoritos.classList.contains("ativa")) {
    coracoes.style.display = "none";
} else {
    coracoes.style.display = "block";
}

}


/* CARTINHAS CLICÁVEIS */

function virarCartao(cartao) {

    cartao.classList.toggle("virado");

}
