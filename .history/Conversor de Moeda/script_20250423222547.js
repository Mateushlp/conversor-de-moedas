const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyValueConverted = document.querySelector(".currency-value-converted")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyName = document.querySelector(".currency-name")
const currencyImage = document.querySelectorAll(".currency-box img")[1]
const videoLogo = document.querySelector("video-logo")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.7
    const euroToday = 6.4
    const libraToday = 7.6
    const ienesToday = 1.4

    const moeda = currencySelect.value
    let valorConvertido

    if (moeda === "dolar") {
        valorConvertido = inputCurrencyValue / dolarToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)
    }

    if (moeda === "euro") {
        valorConvertido = inputCurrencyValue / euroToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)
    }

    if (moeda === "libra") {
        valorConvertido = inputCurrencyValue / libraToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido)
    }

    if (moeda === "iene") {
        valorConvertido = inputCurrencyValue / ienesToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorConvertido)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

convertButton.addEventListener("click", convertValues)

currencySelect.addEventListener("change", () => {
    const moeda = currencySelect.value

    if (moeda === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assents/dolar.png"
    }

    if (moeda === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assents/euro.png"
    }

    if (moeda === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assents/libra2.jpg"
    }

    if (moeda === "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assents/japones.jpg"
    }
})

