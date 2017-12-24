//function shipping
function shipping() {
    var selected = document.getElementById("selectBox").value;
    if(selected === "Please select a country") {
      document.getElementById("shippingRate").innerHTML = "";
      cart.shipping = 0;
      cart.shippingLocation = "";
    } else if(selected === "Canada") {
      document.getElementById("shippingRate").innerHTML = "$" + 9.99;
      cart.shipping = 9.99;
      cart.shippingLocation = "Canada";
    }  else if(selected === "China") {
      document.getElementById("shippingRate").innerHTML = "$" + 10.99;
      cart.shipping = 10.99;
      cart.shippingLocation = "China";
    } else if(selected === "Europe") {
      document.getElementById("shippingRate").innerHTML = "$" + 19.99;
      cart.shipping = 19.99;
      cart.shippingLocation = "Europe";
    } else {
      document.getElementById("shippingRate").innerHTML = "$" + 9;
      cart.shipping = 9;
      cart.shippingLocation = "USA";
    }
    grandTotal();
}//end of shipping
