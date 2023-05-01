// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", formSubmit )
// function formSubmit(e) {

//     e.preventDefalt();

//     const {
//     elements: {email, password},
// } = e.currentTarget;

// if (email.value === "" || password.value === "") {
//     return alert("Для входу всі поля мають бути заповнені");
// }

// // 4
// const nameForm = {
//     [email.name] : email.value,
//     [password.name] : password.value,
// };
// console.log(nameForm);

// e.target.reset()

// }

const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) =>{
e.preventDefault();
// console.log(e)
// console.log(e.target.elements.email.value)
const data = {
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
}
// console.log(data)
if(email.value === "" || password.value ===""){
return alert("Всі поля мають бути заповнені");
}
})