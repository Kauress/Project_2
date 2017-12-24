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
}// end of function
