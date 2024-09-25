function togglemode() {
    const html = document.documentElement
     html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains("light")){
       //se tiver light mode, adicionar a imagem light 
       img.setAttribute("src", "./assets/avatar-light.png")
       img.setAttribute("alt", "Logo prata do Pantera Negra");
    }
    else {
        //se não tiver light mode, adicionar a imagem dark
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Logo dourada do Pantera Negra.");
    }
    
}