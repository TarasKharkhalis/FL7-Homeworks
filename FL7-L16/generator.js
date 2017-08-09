const max = process.argv[2];

let FizzBuzz = function*(){
    var iter = 0, value;
      while (iter < max) {
        iter++;
        if(iter % 15 === 0) {
          value = 'FizzBuzz';
        } else if(iter % 3 === 0) {
          value = 'Fizz';
        } else if (iter % 5 === 0) {
          value = 'Buzz';
        } else {
          value = iter;
        }
      yield value;
    }
  }();

for (var n of FizzBuzz) {
  console.log(n);
}