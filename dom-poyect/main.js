const selectButton = document.querySelector(".btn");
const selectMain = document.querySelector(".main__container");
const text = document.querySelector(".hex__text");

/*
function generateRandomHexColor(){
    const characters = "0123456789abcdef";

    let randomIndex =  Math.floor(Math.random() * characters.length);

    return characters[randomIndex];
}
console.log(generateRandomHexColor());
*/

function generateRandomHexColor() {
    const characters = '#' + ('000000'+Math.round(Math.random()*(Math.pow(2,24)-1)).toString(16)).slice(-6);

    return characters;
}

function changedColor() {
    const changedColor = selectMain.style.backgroundColor  = generateRandomHexColor();

    return changedColor;
}

function changedText() {
    const changedText = text.textContent = generateRandomHexColor(); 

    return changedText;
}

selectButton.addEventListener("click", () => {
  changedColor();
  changedText();
});
