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
  let amount2 = parseInt(amount.innerHTML)+1;
  amount.innerHTML = amount2.toFixed(0); 
  
  
}
function decrement() {
  if(amount2.amount < 1) {
    return;
  }
 let amount2 = parseInt(amount.innerHTML)-1;
  amount.innerHTML = amount2.toFixed(0);
  
}

function addToCart2() {
  let amount2 = parseInt(amount.innerHTML);
  let total2 = parseInt(total.innerHTML.substring(7));
  total.innerHTML = 'total: ' + (total2+amount2*10.99).toFixed(2);
}