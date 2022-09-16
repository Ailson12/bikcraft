const links = document.querySelectorAll(".header-menu a");
links.forEach((link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
});

// ativar items do orçamento
const parametros = new URLSearchParams(location.search);
parametros.forEach((parametro) => {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
});

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const controls = button.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    const ativo = resposta.classList.contains("ativo");
    button.setAttribute("aria-expanded", ativo);
  });
});

// galeria de imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((item) => {
  item.addEventListener("click", (event) => {
    const { matches } = matchMedia("(min-width: 1000px)");
    if (matches) {
      const img = event.currentTarget;
      galeriaContainer.append(img);
    }
  });
});
