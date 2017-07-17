var sh = "#";
var sp = " ";

var i = 1;
var res = "";

while (i < 9) {
	if (i % 2 != 0){
		for (var j = 1; j < 5; j++){
			res = res + sh + sp;
		}
		console.log(res);

	}
	else {
		for (var k = 1; k < 5; k++){
			res = res + sp + sh;
		}
		console.log(res);

	}
	res = "";
	i++;
}