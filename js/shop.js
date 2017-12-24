// function buildCart
 function buildCart() {
       cartItems = cart.items;
     //alert(JSON.stringify(cartItems));
     var table = document.getElementById('productsTable');
     while (table.children.length) {
        table.removeChild(table.children[0]);
    }// end of while
     		for (var key in cartItems) {
     			var item = cart.items[key];
     			//  alert(JSON.stringify(item));
     			var row = document.createElement('tr');
     			var productNameCell = document.createElement('td');
     			var productName = document.createTextNode(item.Name);
     			productNameCell.appendChild(productName);
     			var descriptionCell = document.createElement('td');
     			var description = document.createTextNode(item.Description);
     			descriptionCell.appendChild(description);
     			var quantityCell = document.createElement('td');
     			var quantity = document.createTextNode(item.Quantity);
     			quantityCell.appendChild(quantity);
     			var decreaseButton = document.createElement('button');
     			decreaseButton.appendChild(document.createTextNode('-'));
     			decreaseButton.setAttribute("class", "quantityButton");
     			decreaseButton.setAttribute('index', item.Id);
     			decreaseButton.setAttribute("onclick", "decreaseQuantity(getAttribute('index'))");
     			quantityCell.appendChild(decreaseButton);
     			var increaseButton = document.createElement('button');
     			increaseButton.appendChild(document.createTextNode('+'));
     			increaseButton.setAttribute("class", "quantityButton");
     			increaseButton.setAttribute('index', item.Id);
     			increaseButton.setAttribute("onclick", "increaseQuantity(getAttribute('index'))");
     			quantityCell.appendChild(increaseButton);
     			var priceCell = document.createElement('td');
     			var price = document.createTextNode("$" + item.Price);
     			priceCell.appendChild(price);
     			var amountCell = document.createElement('td');
     			var amount = (item.Amount).toFixed(2);
     			var amountText = document.createTextNode("$" + amount);
           amountCell.appendChild(amountText);
     			var removeItemCell = document.createElement('td');
     			var removeButton = document.createElement('button');
     			removeButton.innerHTML = "Remove";
     			removeButton.setAttribute('index', item.Id);
     			removeButton.setAttribute('class', " btn btn-danger");
     			removeButton.setAttribute("onclick", "removeItem(getAttribute('index'))");
     			removeItemCell.appendChild(removeButton);
     			row.appendChild(productNameCell);
     			row.appendChild(descriptionCell);
     			row.appendChild(quantityCell);
     			row.appendChild(priceCell);
     			row.appendChild(amountCell);
     			row.appendChild(removeItemCell);
     			table.appendChild(row);
     		} // end of for loop
        var couponCell = document.createElement("td");
        couponCell.setAttribute("id", "couponCell1");
        var couponInput = document.createElement("input");
        couponInput.setAttribute("type", "text");
        couponInput.setAttribute("id", "couponCode");
        var applyCouponButton = document.createElement("button");
        applyCouponButton.innerHTML = "Apply coupon";
        applyCouponButton.setAttribute("id", "couponButton");
        applyCouponButton.setAttribute("class", "btn btn-success");
        applyCouponButton.onclick = function() {
          coupon();
        };
        couponCell.appendChild(couponInput);
        couponCell.appendChild(applyCouponButton);
        table.appendChild(couponCell);
        var totalCell = document.createElement("td");
        totalCell.style.fontSize = "18px";
        totalCell.innerHTML = ("Total of items is $" + cart.total);
        totalCell.setAttribute("id", "total");
        table.appendChild(totalCell);
        if(cart.couponValue != 1) {
          couponInputChange();
        }
        var shippingRow = document.createElement("tr");
        var shippingCell = document.createElement("td");
        var select = document.createElement("select");
        select.setAttribute("onchange", "shipping()");
        select.setAttribute("id", "selectBox");
        shippingCell.appendChild(select);
        table.appendChild(shippingCell);
        var selectArray = ["Please select a country", "Canada", "China", "Europe", "USA"];
        for(var i = 0; i < selectArray.length; i++) {
          var option = document.createElement("option");
          option.setAttribute("id", "optionValue");
          option.setAttribute("value", "selectArray[i]");
          option.text = selectArray[i];
          option.value = selectArray[i];
          select.appendChild(option);
        }// end of for
        var shippingPriceCell = document.createElement("td");
        var shippingPrice = document.createElement("p");
        shippingPrice.setAttribute("id", "shippingRate");
        shippingPriceCell.appendChild(shippingPrice);
        shippingRow.appendChild(select);
        shippingRow.appendChild(shippingPriceCell);
        table.appendChild(shippingRow);
        showShipping();
        var totalRow = document.createElement("tr");
        var totalCell = document.createElement("td");
        var sumCell = document.createElement("td");
        sumCell.setAttribute("id", "sumCell");
        var totalText = document.createElement("p");
        totalText.setAttribute("id", "grandTotal");
        totalCell.appendChild(totalText);
        totalRow.appendChild(totalCell);
        totalRow.appendChild(sumCell);
        table.appendChild(totalRow);
        grandTotal();
 } // end of function
