const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
    var iter = 1;

    return {
      next() {
        if (iter > max) {
          return { done: true };
        }

        var value = iter 
        if(iter % 15 === 0) {
          value = 'FizzBuzz';
        } else if(iter % 3 === 0) {
          value = 'Fizz';
        } else if (iter % 5 === 0) {
          value = 'Buzz';
        }

        iter++;
        return {done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}