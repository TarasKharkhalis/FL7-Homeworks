console.log("Task 3");

function forEach(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
    return arr;
}

function getTransformedArray(arr, callback) {
    var result = [];

    forEach(arr, function(el) {
    	result.push(callback(el));
    })

    return result;
    
}

function pluckByAttribute(arr, label) {
    for (var j = 0; j < arr.length; i++) {
        var res = getTransformedArray(arr, function(arr, label) {
            if(label in arr[j]) {
                return 
            }
        }); 
    }
    return res;
}

var arr = [ { name: 'George', surname: 'Kush' } ,{ name: 'Barako', surname: 'Obaame' } ];
console.log(pluckByAttribute(arr, 'name'));