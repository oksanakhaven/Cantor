const inputAmount = document.querySelector(".money");
const firstCurrency = document.querySelector(".currencySelector1");
const secondCurrency = document.querySelector(".currencySelector2");
const calculationButton = document.querySelector(".calculation");
const divResult = document.querySelector(".result");

const rates = [0.22, 0.24, 4.58, 1.1, 4.16, 0.91];
const PLNtoEUR = rates[0];
const PLNtoUSD = rates[1];
const EURtoPLN = rates[2];
const EURtoUSD = rates[3];
const USDtoPLN = rates[4];
const USDtoEUR = rates[5];

let result;
let PLN = "PLN";
let EUR = "EUR";
let USD = "USD";

let dict = {};

calculationButton.addEventListener("click", loop, false);
function loop() {
  let amount = Number(inputAmount.value);

  //   dict["PLNEUR"] = PLNtoEUR;
  //   dict["PLNUSD"] = PLNtoUSD;
  //   dict["EURPLN"] = EURtoPLN;
  //   dict["EURUSD"] = EURtoUSD;
  //   dict["USDPLN"] = USDtoPLN;
  //   dict["USDEUR"] = USDtoEUR;

  //   result = amount * dict[firstCurrency.value + secondCurrency.value];

  
  //   if (firstCurrency.value === PLN) {
  //     if (secondCurrency.value === EUR) return amount * PLNtoEUR;
  //     if (secondCurrency.value === USD) return amount * PLNtoUSD;
  //   }

  //   if (firstCurrency.value === EUR) {
  //     if (secondCurrency.value === PLN) return amount * EURtoPLN;
  //     if (secondCurrency.value === USD) return amount * EURtoUSD;
  //   }

  //   if (firstCurrency.value === USD) {
  //     if (secondCurrency.value === PLN) return amount * USDtoPLN;
  //     if (secondCurrency.value === EUR) return amount * USDtoEUR;
  //   }

     let fc = firstCurrency.value;
     let sc = secondCurrency.value;

  if (fc === "PLN" && sc === "EUR") {
    result = amount * PLNtoEUR;
  } else if (fc === "PLN" && sc === "USD") {
    result = amount * PLNtoUSD;
  } else if (fc === "EUR" && sc === "PLN") {
    result = amount * EURtoPLN;
  } else if (fc === "EUR" && sc === "USD") {
    result = amount * EURtoUSD;
  } else if (fc === "USD" && sc === "PLN") {
    result = amount * USDtoPLN;
  } else if (fc === "USD" && sc === "EUR") {
    result = amount * USDtoEUR;
  }
  divResult.innerHTML = "Result: " + result;
}
