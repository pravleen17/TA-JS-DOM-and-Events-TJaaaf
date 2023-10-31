let form = document.querySelector("form");
let modal = document.querySelector(".modal__overlay");

let userData = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userData.name = elements.name.value;
    userData.email = elements.email.value;
    userData.choice = elements.choice.value;
    userData.color = elements.color.value;
    userData.movie = elements.movie.value;
    userData.book = elements.book.value;
    userData.terms = elements.terms.checked;

    modal.classList.add("open");

    let close = document.querySelector("modal__close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    displayInfo(userData);
});

function displayInfo(data = {}) {
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `Watching Choice: ${data.choice}`;
    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`;
    let movie = document.createElement("p");
    movie.innerText = `Rating for movie: ${data.movie}`;
    let book = document.createElement("p");
    book.innerText = `Book: ${data.book}`;
    let terms = document.createElement("p");
    terms.innerText = `term: ${data.term ? "You have accepted the terms and condition" : "You have not accepted the terms and conditions"}`;

    modalInfo.append(h1, email, choice, color, movie, book, terms);
}
