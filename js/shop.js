// function productTotal
function productTotal() {
    var itemTotal = 0;
    var totalCartQuantity = 0;
    for(var i = 0; i < cart.items.length; i++) {
      if(cart.couponValue === 0.30) {
        itemTotal+= (cart.items[i].Amount) - (cart.items[i].Amount * 0.30);
      } else if(cart.couponValue === 0.50) {
        itemTotal+= (cart.items[i].Amount) - (cart.items[i].Amount * 0.50);
      } else {
        itemTotal+= cart.items[i].Amount;
      }
    }// end of for
    if(cart.items.length === 0) {
      itemTotal = 0;
      document.getElementById("total").innerHTML = "";
    }// end of if
    for(var i = 0; i < cart.items.length; i++) {
      totalCartQuantity+= cart.items[i].Quantity;
      cart.numberItems = totalCartQuantity;
      topCartDisplay();
    }// end of for
    cart.total = itemTotal.toFixed(2);
    buildCart();
}// end of function


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
   productTotal();
   buildCart();
 } // end of getProductInfo function
