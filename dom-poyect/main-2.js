const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const textRed = document.getElementById("text__red");
const textGreen = document.getElementById("text__green");
const textBlue = document.getElementById("text__blue");

const backgroundColorContainer = document.querySelector(".container");

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

textRed.textContent = red;
textGreen.textContent = green;
textBlue.textContent = blue;

function updateColor(red, green, blue ) {
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    backgroundColorContainer.style.backgroundColor = colorRGB;
}

inputRed.addEventListener("input", (e) => {
  red = e.target.value;
  textRed.textContent = red;
  updateColor(red, green, blue);
});

inputGreen.addEventListener("input", (e) => {
  green = e.target.value;
  textGreen.textContent = green;
  updateColor(red, green, blue);
});

inputBlue.addEventListener("input", (e) => {
  blue = e.target.value;
  textBlue.textContent = blue;
  updateColor(red, green, blue);
});
