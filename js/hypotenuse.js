const hypoForm = document.querySelector("#hypoForm");
const inputLines = document.querySelectorAll(".inputLines");
const outputHypo = document.querySelector("#outputHypo");

let lineA, lineB;

hypoForm.addEventListener("submit", hypoFormHandler);

function hypoFormHandler(e) {
    e.preventDefault();

    lineA = Number(inputLines[0].value);
    lineB = Number(inputLines[1].value);

    outputHypo.innerText = Math.sqrt(Math.pow(lineA, 2) + Math.pow(lineB, 2));
}