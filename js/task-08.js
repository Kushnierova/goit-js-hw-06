const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formSubmit )
function formSubmit(e) {

    e.preventDefalt();

    const {
    elements: {email, password},
} = e.currentTarget;

if (email.value === "" || password.value === "") {
    return alert("Для входу всі поля мають бути заповнені");
}

// 4
const nameForm = {
    [email.name] : email.value,
    [password.name] : password.value,
};
console.log(nameForm);

e.target.reset()

}