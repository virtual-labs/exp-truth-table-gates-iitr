function checkmyinput () {
    // Get inputfield
    var inputfield = document.getElementById("A");

   
    // Get value from inputfield
    var inputval = inputfield.value;
    
    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");
    
    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric != 0 &&  numeric != 1 ) {
        inputfield.value = '';
    }
}

function checkmyinputB () {
    // Get inputfield
    var inputfield = document.getElementById("B");

   
    // Get value from inputfield
    var inputval = inputfield.value;
    
    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");
    
    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric != 0 &&  numeric != 1 ) {
        inputfield.value = '';
    }
}

function checkmyinputZ () {
    // Get inputfield
    var inputfield = document.getElementById("Z");

   
    // Get value from inputfield
    var inputval = inputfield.value;
    
    // Remove non numeric input
    var numeric = inputval.replace(/[^0-9]+/,"");
    
    // Check if input is numeric and even, if not empty field
    if (numeric.length != inputval.length || numeric != 0 &&  numeric != 1 ) {
        inputfield.value = '';
    }
}