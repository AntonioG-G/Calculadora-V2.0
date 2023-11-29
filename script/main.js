const result = document.getElementById("resultText");

const readNumbers = value => result.value += value;

const calculate = () => {
    try {
        result.value = eval(result.value);
        if (result.value == "Infinity") {
            displayError();
        }
    } catch (error) {
        displayError();
    }
}

const pow2 = () => result.value = Math.pow(result.value, 2);

const squareRoot = () => result.value = Math.sqrt(result.value);

const clean = () => result.value = "";

const change = () => {
    if (result.value !== "") {
        result.value = result.value.startsWith('-') ? result.value.slice(1) : '-' + result.value;
    }
}

const deleteChar = () => result.value = result.value.slice(0, -1);

const copyResult = () => navigator.clipboard.writeText(result.value);

const displayError = () => {
    result.value = "ERROR";
    setTimeout(clean, 3000);
}
