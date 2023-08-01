// Single pokemon images

let pokemonImg = document.getElementsByClassName("pokemon_images");
// Looping each img
for (i = 0; i < pokemonImg.length; i++) {
    pokemonImg[i].style.border = "2px dotted orange"
}
// Setting background
let body = document.querySelector("body")
body.style.backgroundColor = "#082f77"
// Setting "Let's learn about our gen1 starters" to center
let h2Gen1 = document.querySelector("h2")
h2Gen1.style.textAlign = "center"
