// local storage
function saveCart() {
    var savedCartItems = cart.items;
    localStorage.setItem("cart", JSON.stringify(savedCartItems));
    //alert(JSON.stringify(savedCartItems));
}// end of function

//window onload function to load saved cart items
window.onload = function() {
    if("cart" in localStorage) {
      var loadCartItems = JSON.parse(localStorage.getItem("cart"));
      cart.items = loadCartItems;
      buildCart();
      productTotal();
    }// end of if
};
// decrease quantity
function decreaseQuantity(index) {
    for(var i = 0; i < cart.items.length; i++) {
      if(cart.items[i].Id === index) {
        cart.items[i].Quantity--;
        cart.items[i].Amount = cart.items[i].Quantity * cart.items[i].Price;
        if(cart.items[i].Quantity <= 0) {
          removeItem(index);
        }// end of if
      }// end of if
    }// end of for
    productTotal();
    saveCart();
}// end of function

//increase quantity
function increaseQuantity(index) {
    for(var i = 0; i < cart.items.length; i++) {
      if(cart.items[i].Id === index) {
        cart.items[i].Quantity++;
        cart.items[i].Amount = cart.items[i].Quantity * cart.items[i].Price;
        if(cart.items[i].Quantity >= 101) {
          removeItem(index);
        }// end of if
      }// end of if
    }// end of for
    productTotal();
    saveCart();
}// end of function


// function removeItem
function removeItem(index) {
    for(var i = 0; i < cart.items.length; i++) {
      if(cart.items[i].Id === index) {
        document.getElementById("productsTable").innerHTML = "";
        cart.items.splice(i, 1);
      }// end of if
    }// end of for
    if(cart.items.length == 0) {
      document.getElementById("topCartDisplay").value = 0;
         localStorage.clear();
    }//end of if
    productTotal();
    buildCart();
    saveCart();
}// end of function
