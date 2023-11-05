let display = document.querySelector(".display");
let allBts = document.querySelectorAll("button");

let initialValue = 0;

function handleBtnClick(event) {
    if (event.target.classList.contains("equal")) {
        display.innertext = eval(display.innerText);
        return;
    }
    if (event.target.classlist.contains("clear")) {
        display.innerText = initialValue;
        return;
    }
    if (display.innerText === initialValue) {
        display.innerText = event.target.innerText;
    } else {
        display.innerText += event.target.innerText;
    }
}

allBts.forEach((btn) => {
     btn.addEventListener("click", handleBtnClick)
});
