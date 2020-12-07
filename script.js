function revealMe() {
  alert();
}

//find the secret message on the website
//(for function revealMe when i want to change what it does) document.getElementById("hiddenReveal").style.display = 'block';

let addToCart = document.querySelector("#add-to-cart");
let increment1 = document.querySelector("#increment1");
let decrement1 = document.querySelector("#decrement1");
let amount = document.querySelector("#amount");
let total = document.querySelector("#total");
function increment() {
  amount.innerHTML = parseInt(amount.innerHTML)+1;
  
}
function decrement() {
  amount.innerHTML = parseInt(amount.innerHTML)-1;
  
}