function iniciarSurpresa() {

    const inicio = document.querySelector(".inicio");
    const surpresa = document.querySelector(".surpresa");

    inicio.style.display = "none";
    surpresa.style.display = "flex";

}


function mostrarHistoria() {

    const surpresa = document.querySelector(".surpresa");
    const historia = document.querySelector(".historia");

    surpresa.style.display = "none";
    historia.style.display = "flex";

}
