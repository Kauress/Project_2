
//function grandTotal
function grandTotal() {
    var table = document.getElementById("productsTable");
    var checkoutRow = document.createElement("tr");
    checkoutRow.setAttribute("class", "checkoutRow");
    var grandTotal = 0;
    if(cart.shipping !== 0) {
      grandTotal = parseFloat(cart.total) + parseFloat(cart.shipping);
      document.getElementById("grandTotal").innerHTML = "Your total is:"
      document.getElementById("sumCell").innerHTML = "$" + grandTotal.toFixed(2);
    }// end of if
    if(cart.shipping > 0) {
      var checkoutCell = document.createElement("td");
      var checkoutText = document.createElement("p");
      checkoutText.appendChild(document.createTextNode("You're almost done.."));
      checkoutCell.appendChild(checkoutText);
      var checkoutButtonCell = document.createElement("td");
      var checkoutButton = document.createElement("button");
      checkoutButton.setAttribute("class", "btn btn-lg btn-info");
      checkoutButton.innerHTML = "Paypal";
      checkoutButton.setAttribute("onclick", "paypalPage()");
      checkoutButtonCell.appendChild(checkoutButton);
      checkoutRow.appendChild(checkoutCell);
      checkoutRow.appendChild(checkoutButtonCell);
      table.appendChild(checkoutRow);
    } else {
      var checkoutCell = document.createElement("td");
      var checkoutText = document.createElement("p");
      checkoutText.appendChild(document.createTextNode("Choose a shipping location"));
      document.getElementById("grandTotal").innerHTML = "";
      document.getElementById("sumCell").innerHTML = "";
      checkoutCell.appendChild(checkoutText);
      checkoutRow.appendChild(checkoutCell);
      table.appendChild(checkoutRow);
    }//end of else
    var checkoutRowElements = document.getElementsByClassName("checkoutRow");
    while(checkoutRowElements.length > 1) {
      checkoutRowElements[0].parentNode.removeChild(checkoutRowElements[0]);
    }// end of while
}// end of function
