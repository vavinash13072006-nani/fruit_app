let total = 0;

function addCart(fruit, price){

total = total + price;

document.getElementById("total").innerText = total;

alert(fruit + " added to cart");
}