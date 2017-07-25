console.log("Task 2");

var arr = [1, 7, 20];

function forEach(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
	return arr;
}

function getTransformedArray(arr, transformCallback) {
    var result = new Array();

    forEach(arr, function(el) {
    	result.push(transformCallback(el));
    })

    return result;
    
    }

    function increment(num) { 
    	return num + 1;
    }



 console.log(getTransformedArray(arr, increment));