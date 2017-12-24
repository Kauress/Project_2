// function getProductInfo
function getProductInfo(index) {
  var quantity = parseInt(document.getElementById("product-qty" + index).value);
  //alert(quantity);
  var product = {
    Id: index,
    Name: products[index].Name,
    Description: products[index].Description,
    Price: products[index].Price,
    Amount: products[index].Price * quantity,
    Quantity: quantity
  }; // end of object
  //alert(product.Id);
  var productAlreadyInCart = false;
  for(var i = 0; i < cart.items.length; i++) {
    if(cart.items[i].Id === index) {
      productAlreadyInCart = true;
      cart.items[i].Amount = (product.Amount + cart.items[i].Amount);
      cart.items[i].Quantity = product.Quantity + cart.items[i].Quantity;
      break;
    }// end of if
  }// end of for
  if(!productAlreadyInCart) {
    cart.items.push(product);
  }// end of if
  buildCart();
}// end of function
