function getMin() {
	var min = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] <= min) {
			min = arguments[i];
		}
	}

	var result = console.log(`Minimal from your input is ${min}`);
	return result;
}

getMin(3, 0, -3);