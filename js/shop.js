
//function coupon
function coupon() {
    var couponInput = document.getElementById("couponCode");
    if(couponInput.value === "30%Off") {
        cart.couponValue = 0.30;
    } else if(couponInput.value === "50%Off") {
       cart.couponValue = 0.50;
    } else {
      cart.couponValue = 1;
    }
    productTotal();
}// end of function
