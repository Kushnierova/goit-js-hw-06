function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const color = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () =>{
const changeColor = getRandomHexColor();

body.style.backgroundColor = changeColor;
color.textContent = changeColor;
})