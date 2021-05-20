let name = document.getElementById("name");
let errorMessageName = document.getElementById("nameErrMsg");
let errorMessageEmail = document.getElementById("emailErrMsg");
let email = document.getElementById("email");
let buttonElement = document.getElementById("buttonElement");

let errorMessageText = "Required*";
//to prevent redirection of page on click or on enter
buttonElement.addEventListener('click', function(event) {
    event.preventDefault();
});
//when ever the marker is on name 
name.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        errorMessageName.textContent = errorMessageText;
    } else {
        errorMessageName.textContent = "";
    }
});
//
email.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        errorMessageEmail.textContent = errorMessageText;
    } else {
        errorMessageEmail.textContent = "";
    }
});
