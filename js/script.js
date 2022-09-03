const links = document.querySelectorAll(".header-menu a");
links.forEach((link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo")
  }
})
console.log(links)