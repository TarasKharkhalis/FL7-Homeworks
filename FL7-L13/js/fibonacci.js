var fibonacci = function(n) {
	var x = 0;
	var y = 1;

	if(n <= 2) {
		return n - 1;
	} else {
		for (var i = 0; i < n-1; i++) {
			var tempN = y;
			y = tempN + x;
			x = tempN;
		}
		return y;
	}
}

module.exports = fibonacci;


// console.log(fibonacci(25));