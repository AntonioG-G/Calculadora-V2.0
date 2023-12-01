const result = document.getElementById("resultText");
const historial = document.getElementById("historialText");

const readNumbers = value => result.value += value;

const calculate = () => {
    historial.value = result.value
    try {
        result.value = eval(result.value);
        if (isNaN(result.value) || result.value == Infinity || result.value == undefined) {
            displayError();
        }
    } catch (error) {
        displayError();
    }
}

const pow2 = () =>{
    result.value = Math.pow(result.value, 2);
    if (isNaN(result.value)) {
        displayError();
    }
}

const squareRoot = () => {
    result.value = Math.sqrt(result.value);
    if (isNaN(result.value)) {
        displayError();
    }
}

const clean = () => {
    result.value = "";
    historial.value = "";
}

const change = () => {
    if (result.value !== "") {
        result.value = result.value.startsWith('-') ? result.value.slice(1) : '-' + result.value;
    }
}

const deleteChar = () => result.value = result.value.slice(0, -1);

const copyResult = () => navigator.clipboard.writeText(result.value);

const displayError = () => {
    result.value = "ERROR";
    setTimeout(clean, 1400);
}
