const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyValueConverted = document.querySelector("currency-value")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyName = document.querySelector(".currency-name")
const currencyImage = document.querySelectorAll(".currency-box img")[1]


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.7
    const euroToday = 6.4
    const libraToday = 7.6
    const ienesToday = 1.4
}

if(currencySelect == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}