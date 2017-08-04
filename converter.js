// Reference to the button element in the DOM
var button = document.getElementById("converter");
var resetButton = document.getElementById("reset");

// Function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", clearTheScreen);

function determineConverter () {
//console.log(parseInt(document.getElementById("inputTemp").value));
	var inputTemp = parseInt(document.getElementById("inputTemp").value);

	if (isNaN(inputTemp)) {
		document.getElementById("enternumber").innerHTML = "please enter a valid number";
		document.getElementById("outputTemp").innerHTML = "";
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

// Function to convert Fahrenheit to Celsius
function toCelsius (inputTemp) {
	var Tf = inputTemp * (9/5) + 32;
	return Tf;
}

// Function to convert Celsius to Fahrenheit
function toFahrenheit (inputTemp) {
	var Tc = (inputTemp - 32) * (5/9);
	return Tc;
}

// Function to print result to webpage
function outPutToScreen (outTemp) {
	if (typeof(outTemp) === "number") {
		document.getElementById("outputTemp").innerHTML = outTemp.toFixed(2);
	}
	else {
		document.getElementById("outputTemp").innerHTML = outTemp;
	}

}

// Function to clear result on webpage
function clearTheScreen () {
	document.getElementById("outputTemp").innerHTML = "";
	document.getElementById("enternumber").innerHTML = "";
}