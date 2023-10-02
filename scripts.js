const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector (".currency-select")

function convertValues(){
 const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToconvert = document.querySelector(".currency-value-to-convert")
const currencyValueconvertd = document.querySelector(".currency-value")

console.log(currencySelect.value)


 const doLarToday = 5.8
 const euroToday = 6.2



if( currencySelect.value == "dolar") {

    currencyValueconvertd.innerHTML = new Intl.NumberFormat("en-US",
    { style: "currency",
    currency: "USD" 
    }).format(inputCurrencyValue / doLarToday )
    

}

if(currencySelect.value == "euro" ) {

    currencyValueconvertd.innerHTML = new Intl.NumberFormat ("de-DE", {
style: "currency",
currency: "EUR"

    }).format(inputCurrencyValue/euroToday)

}

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-Br", 
    { style: "currency",
     currency: "BRL"
    }).format(inputCurrencyValue)

}


function changeCurrency (){

const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")



if (currencySelect.value == "dolar"){ 
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
}

 if (currencySelect.value == "euro"){ 
    currencyName.innerHTML = "EURO"
    currencyImage.src="./assets/euro.png"
}

convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues )
