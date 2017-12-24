// onchange function sortByChoice
document.getElementById("sortByChoice").onchange = function() {
    var selectElement = document.getElementById("sortByChoice");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    if(selectedOption === "LowToHigh") {
      products.sort(ascendingOrder);
    } else if(selectedOption === "HighToLow") {
      products.sort(descendingOrder);
    } else {
      products.sort(alphabeticalOrder);
    }
    buildDOM();
}; // end of onchange function
