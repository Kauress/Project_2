// function updateFilter
function updateFilter() {
    var category = [];
    var inputCheckboxes = document.getElementsByClassName("filterCategory");
    var products = document.getElementsByClassName("product-div");
    for(var i = 0; i < inputCheckboxes.length; i++) {
      if(inputCheckboxes[i].checked) {
        var inputCheckboxValue = inputCheckboxes[i].getAttribute("value");
        category.push(inputCheckboxValue);
        //alert(category);
      }// end of if
    }// end of for
    for(var j = 0; j < products.length; j++) {
      var productCategory = products[j].getAttribute("category");
      products[j].style.display = "none";
      for(var k = 0; k < category.length; k++) {
        if(category[k] === productCategory) {
          products[j].style.display = "block";
          break;
        }// end of if
      }// end of for
    }// end of for
    for(var l = 0; l < products.length; l++) {
      if(category.length === 0) {
          products[l].style.display = "block";
      }// end of if
    }// end of for
}//end of function
