let form = document.querySelector("form");

let errorMessages = {};

function displayError(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessages[name];
    elm.parentElement.classList.add("error");
}

function displaySuccess(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements["password-check"].value;

    if (username.length <= 4) {
        errorMessages.username = "Username can't be less than 4 characters";
        displayError("username");
    } else {
        displaySuccess("username");
    }

    if (!isNaN(name)) {
        errorMessages.name = "Name can't be numbers";
        displayError("name");
    } else {
        displaySuccess("name");
    }

    if (!email.includes("@")) {
        errorMessages.email = "Email must contain the symbol @";
        displayError("email");
    } else if (email.length < 6) {
        errorMessages.email = "Email must be at least 6 characters";
        displayError("email");
    } else {
        displaySuccess("email");
    }

    if (isNaN(phone)) {
        errorMessages.phone = "Phone numbers can only be a number";
        displayError("phone");
    } else if (phone.length < 7) {
        errorMessages.phone = "Length of phone can't be less than 7";
        displayError("email");
    } else {
        displaySuccess("phone");
    }

    if (password !== passwordCheck) {
        errorMessages.password = "Password and confirm password must be same";
        errorMessages["password-check"] = "Password and password-check must be same";
        displayError("password");
        displayError("password-check");
    } else {
        displaySuccess("password");
        displaySuccess("password-check");
    }

}

form.addEventListener("submit", handleSubmit);
