let price = [
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
}




var bgDiv = $('#page1');
var bgImg = $('#page1 > .background');

var backgrounds = new Array(
    'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2Fcomputer-keyboard-electronics-modern.jpg?v=1609114183583'
  , 'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2Fphoto-1555066931-4365d14bab8c.webp?v=1609114185091'
  , 'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2Fwallpapersden.com_programming-coding-language_1920x1080.jpg?v=1609114189007'
  , 'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2F407978-programming-PHP-programming_language-syntax_highlighting-minified-knowledge-coding-code-HTML-computer-pixels-Computer_screen-logic-748x499.jpg?v=1609177511678'
  , 'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2Fpexels-photo-177598.jpeg?v=1609177631960'
  , 'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2Fistockphoto-1047259374-612x612.jpg?v=1609333792807'
  , 'https://cdn.glitch.com/bc653cfc-ef90-45fa-b3ce-621a42c7ad62%2Finline_image_preview.jpg.webp?v=1609333794293'
);

function commandsOnClick(page) {
  window.scrollTo(0, window.innerHeight * page);
}
var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length; 
  
    bgDiv.css('background-image', 'url('+backgrounds[current]+')');
    bgImg.attr('src', backgrounds[current]);
}
setInterval(nextBackground, 1500);

bgDiv.css('background-image', 'url('+backgrounds[0]+')');
bgImg.attr('src', backgrounds[0]); 