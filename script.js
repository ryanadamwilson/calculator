var keyCodes = {
	48: 0,
	49: 1,
	50: 2,
	51: 3,
	52: 4,
	53: 5,
	54: 6,
	55: 7,
	56: 8,
	57: 9,
	61: "=",
	43: "+",
	45: "-",
	47: "/",
	13: 13,
	08: 08,
	127: 127,
	46: "."

};
function evaluate(input) {
	var equals = document.querySelector('.view').innerHTML;
	var newEquals = equals.replace("+", ",+,");
	newEquals = newEquals.split(",");
	var counter;
	var counter1 = 0;
	var counter2 = 0;

		if (newEquals[0].indexOf('.') !== -1) {
			for (var i = newEquals[0].indexOf('.'); i < newEquals[0].length; i++) {
				counter1++;
			}
		}
		if (newEquals[2].indexOf('.') !== -1) {
			for (var i = newEquals[2].indexOf('.'); i < newEquals[2].length; i++) {
				counter2++;
			}
		}
	if (counter1 >= counter2) {
		counter = counter1 - 1;
	} else {
		counter = counter2 - 1;
	}
	var evaluateEquals = eval(equals);
	evaluateEquals = Math.round(evaluateEquals*100)/100;
	evaluateEquals = evaluateEquals.toFixed(counter);
	input.innerHTML = evaluateEquals;
}
function getValue(number) {
	var input = document.querySelector('.view');
	var inputValue = input.innerHTML;
	var buttonValue = number;

	if (buttonValue == 'C') {
		input.innerHTML = "";
	} else if (buttonValue == '=') {
		evaluate(input);
	} else {
		input.innerHTML += buttonValue;
	}
}
window.addEventListener("keypress", function (e) {
	function checkKey(e) {
	    var event = e;
	    var input = document.querySelector('.view');
	    var convertKeyCode = keyCodes[event.keyCode];
	    if ( convertKeyCode === undefined) {
	    	alert('You must enter a number or a mathematical operator.');
	    } else if  (convertKeyCode === '=' || convertKeyCode === 13) {
	    	evaluate(input);
		} else {
	    	input.innerHTML += keyCodes[event.keyCode];
		}
	}
	checkKey(e);

});

