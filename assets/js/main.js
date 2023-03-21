const hamburguer = document.querySelector(".menu__icone");
const icone = document.querySelector(".icone__imagem");

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle("aberto");

    if (hamburguer.classList.contains("aberto")) {
        icone.src="./assets/icons/fechar.svg";
    } else {
        icone.src="./assets/icons/hamburguer.svg";
    }
})