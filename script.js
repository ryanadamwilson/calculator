var values = document.querySelectorAll('#calculator span');
var operators = [];
var keyup = document.getElementsByClassName('.view');
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
	47: "/"
};

function getValue(number) {
	var input = document.querySelector('.view');
	var inputValue = input.innerHTML;
	var buttonValue = number;

	if (buttonValue == 'C') {
		input.innerHTML = "";
	} else if (buttonValue == '=') {
		var equals = document.querySelector('.view').innerHTML;
		var evaluateEquals = eval(equals);
		input.innerHTML = evaluateEquals;
	} else {
		input.innerHTML += buttonValue;
	}
}
window.addEventListener("keypress", function (e) {
	function checkKey(e) {
	    var event = e;
	    var input = document.querySelector('.view');
	    input.innerHTML += keyCodes[event.keyCode];
	}
	checkKey(e);
});