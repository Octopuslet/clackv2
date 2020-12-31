let topButtonTest = $('#page2 > .top-button-test');

function commandsOnClick(page) {
  window.scrollTo(0, window.innerHeight * page);
}


function letThereBeLight() {
  
  
  
  
  topButtonTest.css('visibility', 'visible');
}


$(document).ready(function (){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
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

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}






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






