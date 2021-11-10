/** @format */
"use strict";

// Tareas a realizar

// 1.- Declarar las variables para el programa
// 1.1.- Hacer un (array) con los nombres de los colores
// 1.2.- Hacer un ciclo for que en cada iteración, llene un array con los nombres de los colores.
// 2.- Hacer un ciclo for para colocar dentro del 'id name' el nombre del color, segun el orden del array
// 3.- hacer una función que creara un objeto completo que sea el (div contenedor del p > nombre_color y span > color), por cada iteracion del rrecorrido del array - utilizar un ciclo for.
// 4.- Hacer una función para poner al 'id name' el (style color) del indice en cuestión - ciclo for

const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenrod",
  "DarkGray",
  "DarkGreen",
  "DarkGrey",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "Goldenrod",
  "Gray",
  "Green",
  "GreenYellow",
  "Grey",
  "Honeydew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenrodYellow",
  "LightGray",
  "LightGreen",
  "LightGrey",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquamarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenrod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "Rebeccapurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "Seashell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

// array que almacena los divs constructores.
const divs = [];

// ciclo for para iterar el array de colors y en cada iteración construye un nuevo elemento div.
for (let i = 0; i < colors.length; i++) {
  divs.push(`
  <div class="container_colors">
    <p class="name">${colors[i]}:</p>
    <div onclick="copyNameColor(this)" class="color" id="${colors[i]}">${colors[i]}</div>
  </div>`);
}

// función que crea en el DOM un div nuevo en cada iteración del array colors, asi mismo en cada iteración del ciclo for le asigna la propiedad background-color a cada elemento div nuevo creado con el id del color que corresponda.
const newDiv = (arr) => {
  for (let i = 0; i < colors.length; i++) {
    document.getElementById("container_color").innerHTML += divs[i];

    document.getElementById(colors[i]).style.backgroundColor = colors[i];

    document.getElementById(colors[i]).style.color = colors[i];
  }
};

// llamada de la función para crear los nuevos divs en el DOM.
newDiv(divs);

// declarando las variables del modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".modal__btn-close");
const msjCopy = document.querySelector(".modal__p");

// función para copiar el nombre del color al hacer click sobre el elemento div id=color.
function copyNameColor(elemento) {
  let name = document.createElement("input");
  document.getElementsByTagName("body")[0].appendChild(name);
  name.value = elemento.innerHTML;
  name.select();
  document.execCommand("copy");
  document.getElementsByTagName("body")[0].removeChild(name);

  openModal();
  msjCopy.innerHTML = `color: '${name.value}' copiado!`;

  // alert(`Color: '${name.value}' copiado!`);
}

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
