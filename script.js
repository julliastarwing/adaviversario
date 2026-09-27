
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

}


/* CARTINHAS CLICÁVEIS */

function virarCartao(cartao) {

    cartao.classList.toggle("virado");

}
