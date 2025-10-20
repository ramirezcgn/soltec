let pageTitle = document.querySelector(".hero__title");

pageTitle.textContent = "Desarrollo Web y Soluciones";

let secondaryPageTitle = [...document.querySelectorAll(".headline__title")];

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


let boton = document.getElementById("boton");
let menu = document.getElementById("menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menu.classList.toggle("oculto");
});

const languageButton = document.querySelector('.language-selector__button');
const languageMenu = document.querySelector('.language-selector__dropdown');

languageButton.addEventListener('click', () => {
  languageMenu.classList.toggle('visible');
});




/* # �� 50 Ejercicios de JavaScript: Manipulación del DOM

## �� Nivel 1: Fundamentos

1. Cambiar el texto de un elemento con `textContent`
2. Cambiar el color de fondo del `body`
3. Mostrar el valor de un input en un `<p>`
4. Validar si un campo está vacío
5. Cambiar el tamaño de fuente de un elemento
6. Ocultar un elemento con `style.display = 'none'`
7. Mostrar un elemento oculto
8. Alternar visibilidad con `classList.toggle()`
9. Cambiar el contenido HTML con `innerHTML`
10. Agregar una clase CSS a un elemento

## �� Nivel 2: Eventos

11. Ejecutar una función al hacer clic en un botón
12. Detectar cuando el mouse entra en un elemento (`mouseenter`)
13. Detectar cuando el mouse sale (`mouseleave`)
14. Cambiar el color de un botón al hacer hover
15. Detectar teclas presionadas con `keydown`
16. Mostrar una alerta al hacer doble clic
17. Cambiar el texto al pasar el mouse por encima
18. Ejecutar una función al cambiar el valor de un input
19. Prevenir el envío de un formulario
20. Mostrar el valor seleccionado de un `<select>`

## �� Nivel 3: Formularios y entradas

21. Contar caracteres en un input en tiempo real
22. Validar que un email tenga `@`
23. Mostrar mensaje de error si el campo está vacío
24. Limpiar un formulario al hacer clic en "Reset"
25. Mostrar contraseña al hacer clic en un ícono
26. Habilitar botón solo si todos los campos están completos
27. Crear un contador de clics en un botón
28. Mostrar fecha actual en un `<p>`
29. Mostrar la hora actual en tiempo real
30. Validar que dos contraseñas coincidan

## �� Nivel 4: Crear y eliminar elementos

31. Agregar elementos a una lista (`<ul>`)
32. Eliminar el último elemento de una lista
33. Crear una tarjeta con nombre e imagen
34. Clonar un elemento existente
35. Insertar un elemento antes de otro
36. Insertar un elemento después de otro
37. Reemplazar un elemento por otro
38. Crear una tabla dinámica con datos
39. Agregar una fila a una tabla
40. Eliminar una fila de una tabla

## �� Nivel 5: Navegación y atributos

41. Leer el atributo `src` de una imagen
42. Cambiar el atributo `href` de un enlace
43. Cambiar el `alt` de una imagen
44. Detectar si un checkbox está marcado
45. Cambiar el valor de un input programáticamente
46. Leer el valor de un `data-*` atributo
47. Cambiar el `title` de un elemento
48. Mostrar el número de hijos de un elemento
49. Navegar entre elementos padre e hijo
50. Detectar el elemento clickeado con `event.target`

---

## �� Bonus: Ideas para expandir

- Crear una calculadora básica
- Simular un semáforo con colores
- Crear un sistema de tareas (todo list)
- Implementar un carrusel de imágenes
- Crear un reloj digital con 
Contraer

*/ 




















