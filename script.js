function toggleMode() {
    const html = document.documentElement
 
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem 
    if(html.classList.contains('light')) {

    // update img
    //se tiver light mode, adicionar a imagem samurai.jpg
    img.setAttribute("src", "./assets/Avatar-light.png")
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/espaço.avif")
    }
}
