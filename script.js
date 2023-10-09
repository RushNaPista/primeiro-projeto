function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Dio Brando Raivoso")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Dio Brando")
  }

  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
}
