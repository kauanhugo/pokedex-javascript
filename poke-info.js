let retanguloAberto = false; 

function criarRetangulo() {
    if (!retanguloAberto) {
        const retangulo = document.createElement("div");
        retangulo.classList.add("whiteRectangle");

        document.body.appendChild(retangulo);

        retanguloAberto = true;

        retangulo.addEventListener("click", () => {
            document.body.removeChild(retangulo);
            retanguloAberto = false; 
        });
    } else {
        const retangulo = document.querySelector("pokemons");
        if (retangulo) {
            document.body.removeChild(retangulo); 
            retanguloAberto = false; 
        }
    }
}

pokemonList.addEventListener("click", criarRetangulo);