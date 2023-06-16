function toggleMode() {
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag da img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //substituir a imagem

  //se tiver sem light mode, manter a imagem normal
}
