const readNumbers = (value) =>{
    document.getElementById("resultText").value+=value;
}
const calculate = () =>{
    let result = document.getElementById("resultText");
    try {
        result.value = eval(result.value);
        if (result.value == "Infinity") {
            result.value = "ERROR";
            setTimeout(() => {
                clean();
            }, 3000);
        }
    } catch (error) {
        result.value = "ERROR";
        setTimeout(() => {
            clean();
        }, 3000);
    }
}
const clean = () =>{
    let result = document.getElementById("resultText");
    result.value = "";
}
const change = () =>{
    let result = document.getElementById("resultText");
        if (result.value !== "") {
            result.value = result.value.startsWith('-') ? result.value.slice(1) : '-' + result.value;
        }
}
const deleteChar = () =>{
    let result = document.getElementById("resultText");
    result.value = result.value.slice(0,-1);
}