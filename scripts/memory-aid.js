let pageTitle = document.querySelector(".hero__title");

// querySelector selecciona un elemento css y devuelve un elemento.
// no se recomienda usar getElementBy--.

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