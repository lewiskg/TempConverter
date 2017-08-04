function determineConverter () {
//console.log(parseInt(document.getElementById("inputTemp").value));
	var inputTemp = parseInt(document.getElementById("inputTemp").value);

	if (isNaN(inputTemp)) {
		document.getElementById("enternumber").innerHTML = "please enter a valid number";
	} 
	else {
 	
 		if (document.getElementById('F').checked) {
 			outPutToScreen(toFahrenheit(inputTemp));
		} 
		else if (document.getElementById('C').checked) {
 			outPutToScreen(toCelsius(inputTemp));
		} 
		else {
			outPutToScreen("Select temperture units");
 		}
 	}
}

function toCelsius (inputTemp) {
	var Tf = inputTemp * (9/5) + 32;
	return Tf;
}

function toFahrenheit (inputTemp) {
	var Tc = (inputTemp - 32) * (5/9);
	return Tc;
}

function outPutToScreen (outTemp) {
	document.getElementById("outputTemp").innerHTML = outTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
//function determineConverter (clickEvent) {
//  console.log("event", clickEvent);
//}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter());
