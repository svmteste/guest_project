//Mapeia os elementos
let nameInput = document.getElementById("nameInput");
let guestList = document.getElementById("guestList");
//pega o conteudo do input
let valorUsuario = nameInput.value;
//Mostra na tag de paragrafo
guestList.textContent = valorUsuario;


/*
let nameInput = document.getElementById("nameInput");
let addButton = document.getElementById("addButton");
let guestList = document.getElementById("guestList");
addButton.addEventListener("click", clicouNoBotao);

function clicouNoBotao() {
    let valorUsuario = nameInput.value;
    guestList.textContent =
}
*/