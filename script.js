
/* SISTEMA DE TELAS */

function trocarTela(numero) {
    const telas = document.querySelectorAll(".tela");

    if (!telas[numero]) {
        return;
    }

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    telas[numero].classList.add("ativa");

    window.scrollTo(0, 0);
}


/* CARTINHAS */

function virarCartao(cartao) {
    cartao.classList.toggle("virado");
}
