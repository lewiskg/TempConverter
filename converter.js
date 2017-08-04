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

// Function to convert Fahrenheit to Celsius; returns object with temp and units
function toCelsius (inputTemp) {
	var Tf = {
		temp: inputTemp * (9/5) + 32,
		units: 'F'
	};
	return Tf;
}

// Function to convert Celsius to Fahrenheit; returns object with temp and units
function toFahrenheit (inputTemp) {
	var Tc = {
		temp: (inputTemp - 32) * (5/9),
		units: 'C'
	};
	return Tc;
}

// Function to print result to webpage
// Colors output temperture either: hot, cold, or comfortable
function outPutToScreen (outTemp) {
	if (typeof(outTemp) === "object") {
		var color = "comfortable";
		if ( (outTemp.units==='F' && outTemp.temp > 90) || (outTemp.units==='C' && outTemp.temp > 32) ) { 
			color = "hot";
		}
		else if ( (outTemp.units==='F' && outTemp.temp < 32) || (outTemp.units==='C' && outTemp.temp < 0) ) { 
			color = "cold";
		}
		var outputString = "<span class=" + color + ">" + outTemp.temp.toFixed(2) + " " + outTemp.units + "</span>";
		document.getElementById("outputTemp").innerHTML = outputString;
	}
	else {
		document.getElementById("outputTemp").innerHTML = outTemp;
	}
}

// Function to clear result on page
function clearTheScreen () {
	document.getElementById("outputTemp").innerHTML = "";
	document.getElementById("enternumber").innerHTML = "";
}