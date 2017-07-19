function isPrime(a) {
	var count = 0;
    for (var i = 1; i <= a; i++) {
       if (a % i === 0) {
       		count++;
       } else {
       		continue;
       }
    }

    if (count === 2) {
    	var result = console.log(true);
    } else {
    	result = console.log(false);
    }
    return result;
}

isPrime(5);