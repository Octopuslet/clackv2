function commandsOnClick(page) {
  window.scrollTo(0, window.innerHeight * page);
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("top-button").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "top-button") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
/*let price = [
  10.99
]

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
    console.log(_amount)
    let _total = parseInt(total[id].innerHTML.trim().substring(7));
    console.log(total[id].innerHTML)
    total[id].innerHTML = 'total: ' + (_total+_amount*10.99).toFixed(2)+" €";
} */






