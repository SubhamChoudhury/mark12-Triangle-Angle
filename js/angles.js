const angleForm = document.querySelector("#angleForm");
const inputAngles = document.querySelectorAll(".inputAngle");
const angleOutput = document.querySelector("#angleOutput");

let angleJS=[];

document.addEventListener("submit", angleFormHandler);

function angleFormHandler(e) {
    
    e.preventDefault();

    for(var i=0; i<inputAngles.length; i++) {
        angleJS[i] = Number(inputAngles[i].value);
    }

    let sum = 0;

    for (let i = 0; i < angleJS.length; i++) {
        sum += angleJS[i];
    }

    if(sum === 180) {
        angleOutput.innerText = "Yay! These angles can make a triangle!";
    }
    else {
        angleOutput.innerText = "Oops! These angles cannot make a triangle";
    }

}