let input = document.getElementById("input");
let fahrenheit = document.getElementById("fahrenheit");
let celcius = document.getElementById("celcius");
let output = document.getElementById("out");
let tem;


let submit = document.getElementById("submit");
let resetB = document.getElementById("reset");
submit.addEventListener("click", convert);
resetB.addEventListener("click", reset);

function convert(){
    if (fahrenheit.checked) {
        tem = Number(input.value);
        tem = (tem * 9/5) + 32;
        output.textContent = tem.toFixed(2) + " °F";
    }
    else if (celcius.checked) {
        tem = Number(input.value);
        tem = (tem - 32) * (5/9);
        output.textContent = tem.toFixed(2) + " °C";
    }
    else {
        output.textContent = "Select a UNIT!";
    }
};

function reset() {
    input.value = "";
    output.textContent = "";
    fahrenheit.checked = false;
    celcius.checked = false;
}

