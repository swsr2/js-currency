let currencyRatio = {
  USD: {
    KRW: 1218.74,
    USD: 1,
    VND: 23450.00,
    unit: "dallor"
  },
  KRW: {
    KRW: 1,
    USD: 0.00082,
    VND: 19.24,
    unit: "won"
  },
  VND: {
    KRW: 0.052,
    USD: 0.000043,
    VND: 1,
    unit: "dong"
  }
}

let fromCurrency = "USD";
let toCurrency = "USD";


document.querySelectorAll("#from-currency-list a").forEach(menu => menu.addEventListener("click", function() {
  document.getElementById("from-btn").textContent = this.textContext;
  fromCurrency = this.textContext;
  convert();
}));

document.querySelectorAll("#to-currency-list a").forEach(menu => menu.addEventListener("click", function() {
  document.getElementById("to-btn").textContent = this.textContext;
  toCurrency = this.textContext;
  convert();
}));

function convert() {
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

  document.getElementById("to-input").value = convertedAmount;
}