console.log("Task 1");

var arr = [1, 2, 3, 4, 5, 6];

function forEach(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
	return arr;
}

forEach(arr, function(el) {
	console.log(el);
});