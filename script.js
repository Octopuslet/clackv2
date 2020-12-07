function revealMe() {
  alert();
}

//find the secret message on the website
//(for function revealMe when i want to change what it does) document.getElementById("hiddenReveal").style.display = 'block';

let addToCart = document.getElementById("add-to-cart");
let increment1 = document.getElementById("increment1");
let decrement1 = document.getElementById("decrement1");
let amount = document.getElementById("amount");
let total = document.getElementById("total");
function increment() {
  amount.innerHTML = parseInt(amount.innerHTML)+1;
}
