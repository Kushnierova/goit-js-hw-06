let countValue = 0;

const valueBtn = document.querySelector("#value");

const IncrBtn = document.querySelector('button[data-action="increment"]');
IncrBtn.addEventListener("click", () => {
  countValue += 1;
  valueBtn.textContent = countValue;
//   console.log("Button +1");
});

const DecrBtn = document.querySelector('button[data-action="decrement"]');
DecrBtn.addEventListener("click", () => {
  countValue -= 1;
  valueBtn.textContent = countValue;
//   console.log("Button -1);
});



