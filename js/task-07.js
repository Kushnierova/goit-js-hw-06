const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.value = 16;

fontSizeControl.addEventListener("input", (e) =>{
    text.style.fontSize = e.currentTarget.value + "px";
})