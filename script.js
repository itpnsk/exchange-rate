
function processCurrencyFromChange() {
    console.log("processCurrencyFromChange()");
    readData(currencyFrom.value).then(
        (res) => {
            console.log(currencyTo.value);
            console.log(inputFrom.value);
            console.log(res.rates[currencyTo.value]);
            inputTo.value = res.rates[currencyTo.value] * inputFrom.value;
        }
    )
}

function readData(currency) {
    console.log(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    return fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((res)=> res.json())
}

function onSwapButtonPressed(){
    [currencyTo .value, currencyFrom.value] = [currencyFrom.value, currencyTo .value];
    processCurrencyFromChange();
}

currencyFrom = document.getElementById("currencyFrom");
currencyTo = document.getElementById("currencyTo");
inputFrom = document.getElementById("inputFrom");
inputTo = document.getElementById("inputTo");
swapBtn = document.getElementById("swap");



currencyFrom.addEventListener("change", processCurrencyFromChange);
currencyTo.addEventListener("change", processCurrencyFromChange);
inputFrom.addEventListener("change", processCurrencyFromChange);
swapBtn.addEventListener("click", onSwapButtonPressed);

processCurrencyFromChange();

// [a, b] = [b, a];