/*
objeto[índice] → se usa para acceder a posiciones.

objeto(parámetro) → se usa para ejecutar funciones.
*/


//----------------Seleccionar Elementos del DOM----------------

let pageTitle = document.querySelector(".hero__title");

// querySelector selecciona un elemento css y devuelve un elemento.
// no se recomienda usar getElementBy--.

//---------------------Modificar Contenido de Texto------------------

pageTitle.textContent = "Desarrollo Web y Soluciones";
// tambien se puede usar, menos recomendado.
pageTitle.innerText = "Desarrollo Web y Soluciones";

//pageTitle.innerHTML = "<em>Desarrollo Web y Soluciones</em>";
// no se recomienda usar innerHTML para solo cambiar texto, por inyeccion de texto.

let secondaryPageTitle = document.querySelectorAll(".headline__title");
// querySelectorAll selecciona un elemento css y devuelve un nodo.
// para convertirlo en un arreglo [...document.querySelectorAll("")]; se usa [... contenido].
let secondaryPageTitlE = [...document.querySelectorAll(".headline__title")];

secondaryPageTitle.forEach(title => {
  title.textContent = "Innovación digital para tu negocio";
});

//------------------Modificar Estilos CSS (Directamente con .style)---------------------

let sectionBgColor = [...document.querySelectorAll(".section")];

sectionBgColor.forEach(color => {
  let backgroundColor = getComputedStyle(color).backgroundColor;

  if (backgroundColor === "rgb(255, 255, 255)") {
    color.style.backgroundColor = "#EBF2F6";
  }
});

/* stlyle Cambia las propiedades
.style.color = "blue";
.style.fontSize = "28px";
.style.textAlign = "center";
.style.margin = "200px";
.style.textTransform = "uppercase";
*/

//--------------------------------Manipulación de Clases CSS--------------------


pageTitle.classList.add("new__class"); // agrega una clase
pageTitle.classList.remove("new__class");  // quita la clase
pageTitle.classList.toggle("new__class");  // la agrega si no está, o la quita si está
pageTitle.classList.contains("new__class"); // verifica si la tiene

// sirve para cuando el usuario interactue con la pagina y esta haga algo por ejemplo para ocultar o mostrar cosas.
 
/*  css
.oculto {
  display: none;  Oculta el menú 
}

.visible {
  display: block;  Lo muestra 
}
*/

/* javascript
let boton = document.getElementById("boton");
let menu = document.getElementById("menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menu.classList.toggle("oculto");
});
*/

let addLine = [...document.querySelectorAll(".card--quaternary .card__description")];

addLine.forEach(element => {
  element.classList.add("new__class");
  element.style.borderBottom = "2px solid #696e7c";
  element.style.paddingBottom = "40px";
});

//addLine.forEach(element => element.classList.add("new__class"));

//addLine.forEach(element => element.style.borderBottom = "2px solid #696e7c");

//addLine.forEach(element => element.style.paddingBottom = "40px");

// --------------------Creacion de Elemento+Clase---------------------

let selectFather = document.querySelector(".headline--fifth");

let newElement = document.createElement("p");
                                        // agrega el elemento entre ()

newElement.classList.add("headline__overline");
//add = agregar

newElement.textContent = "LOREM IPSUM";

selectFather.append(newElement);
//append = crear nodo

selectFather.remove(newElement);
//remove = eliminar nodo

//----------------------------- Agregar una Clase que ya existe a un elemento ----------------

newElement.classList.add("headline__overline", "button", "button--icon");
// se pueden agregar varias 

newElement.setAttribute("class", "button");
// menos recomendable borra las clases que ya tiene el elemento 

//---------------------------------------Acceder al Padre, hijo y hermano-----------------------------------

let findFather = document.querySelector(".container");

findFather.parentElement;
// sirve para cuando seleccionas al hijo el padre haga algo comocambiar de color

findFather.children;
// no se accede directamente al hijo sino a una lista y se accede a traves de su indice [0]

findFather.firstElementChild;
// accede al primer elemento del hijo derectamente y last al ultimo

findFather.previousElementSibling;
// accede al elemento anterior y next al seguiente


//**                                            EVENTOS                                                         * *//

// onclick : le dice al navegador que hacer cuando el usuario haga click