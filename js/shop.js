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
}// end of function
