function cambiarColor(elementId) {
    elemento = document.querySelector("#" + elementId);
    elemento.style.backgroundColor = "black";
  }

document.addEventListener('keydown', function (event) {
   if (event.key === "a" || event.key === "A") {
    let tecla = document.querySelector('#key');
    tecla.style.backgroundColor = "pink";
} else if (event.key === "s" || event.key === "S") {
    let tecla = document.querySelector('#key');
    tecla.style.backgroundColor = "orange";
} else if (event.key === "d" || event.key === "D") {
    let tecla = document.querySelector('#key');
    tecla.style.backgroundColor = "skyblue";
} else if (event.key === "q" || event.key === "Q") {
    let tecla = document.querySelector('#key');
    tecla.style.backgroundColor = "purple";
} else if (event.key === "w" || event.key === "W") {
    let tecla = document.querySelector('#key');
    tecla.style.backgroundColor = "grey";
} else if (event.key === "e" || event.key === "E") {
    let tecla = document.querySelector('#key');
    tecla.style.backgroundColor = "brown";
} else {
    //nada
}
})