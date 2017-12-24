// function showShipping
function showShipping() {
    if(cart.shipping !== 0) {
        document.getElementById("selectBox").value = cart.shippingLocation;
    }// end of if
}// end of function
