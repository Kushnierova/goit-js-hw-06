const input = document.querySelector("#validation-input");
input.addEventListener("blur", (e) => {
    // console.log(e.target.value);
    if (
      e.currentTarget.value.length ===
      Number(input.getAttribute("data-length"))
    ) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });