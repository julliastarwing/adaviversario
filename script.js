
const telas = document.querySelectorAll(".tela");

function trocarTela(numero) {

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    telas[numero].classList.add("ativa");

    window.scrollTo(0, 0);

}

function virarCartao(cartao) {

    cartao.classList.toggle("virado");

}
