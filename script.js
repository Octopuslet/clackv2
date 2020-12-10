function revealMe() {
  alert();
}

//find the secret message on the website
//(for function revealMe when i want to change what it does) document.getElementById("hiddenReveal").style.display = 'block';

/* let addToCart = document.querySelector("#add-to-cart");
let increment1 = document.querySelector("#increment1");
let decrement1 = document.querySelector("#decrement1");
let amount = document.querySelector("#amount");
let total = document.querySelector("#total");
function increment() {
  let amount2 = parseInt(amount.innerHTML)+1;
  amount.innerHTML = amount2.toFixed(0); 
  
  
}
function decrement() {
 let amount2 = parseInt(amount.innerHTML)-1;
  amount.innerHTML = amount2.toFixed(0);
}

function addToCart2() {
  let amount2 = parseInt(amount.innerHTML);
  let total2 = parseInt(total.innerHTML.substring(7));
  total.innerHTML = 'total: ' + (total2+amount2*10.99).toFixed(2);
}



let addToCart3 = document.querySelector("#add-to-cart3");
let increment2 = document.querySelector("#increment2");
let decrement2 = document.querySelector("#decrement2");
let amount9 = document.querySelector("#amount9");
let totals = document.querySelector("#totals");
function increments() {
  let amount5 = parseInt(amount9.innerHTML)+1;
  amount9.innerHTML = amount5.toFixed(0); 
  
  
}
function decrements() {
 let amount5 = parseInt(amount9.innerHTML)-1;
  amount9.innerHTML = amount5.toFixed(0);
}

function addToCarts() {
  let amount5 = parseInt(amount9.innerHTML);
  let total3 = parseInt(totals.innerHTML.substring(7));
  totals.innerHTML = 'total: ' + (total3+amount5*10.99).toFixed(2);
}*/



let addToCart = [
    document.querySelector("#add-to-cart1"),
    document.querySelector("#add-to-cart2"),
];
let increment = [
    document.querySelector("#increment1"),
    document.querySelector("#increment2"),
];
let decrement = [
    document.querySelector("#decrement1"),
    document.querySelector("#decrement2"),
];
let amount = [
    document.querySelector("#amount1"),
    document.querySelector("#amount2"),
];
let total = [
    document.querySelector("#total1"),
    document.querySelector("#total2"),
];

function incrementAmount(id) {
    let _amount = parseInt(amount[id].innerHTML)+1;
    amount[id].innerHTML = _amount.toFixed(0);
}

function decrementAmount(id) {
    let _amount = parseInt(amount[id].innerHTML)-1;
    if(_amount > 0) {
        amount[id].innerHTML = _amount.toFixed(0);
    }
}

function changeTotal(id) {
    let _amount = parseInt(amount[id].innerHTML);
    let _total = parseInt(total.innerHTML.substring(7));
    total[id].innerHTML = 'total: ' + (_total+_amount*10.99).toFixed(2);
}