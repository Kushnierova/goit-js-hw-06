const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) =>{
e.preventDefault();
// console.log(e);

    const {
    elements: {email, password},
} = e.target;

if(email.value === "" || password.value ===""){
return alert("Всі поля мають бути заповнені");
}

// console.log(e.target.elements.email.value);
const data = {
    email: email.value,
    password: password.value,
}
console.log(data);
})