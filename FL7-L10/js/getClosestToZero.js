function getClosestToZero() {
	var closest = Math.abs(arguments[0]);
	for (var i = 1; i < arguments.length; i++) {
		if(Math.abs(arguments[i]) < Math.abs(closest)){
			closest = arguments[i];
		} else {
			continue;
		}
	}
	var result = console.log(closest);
	return result;
}

getClosestToZero(2, 5, -3, 1);