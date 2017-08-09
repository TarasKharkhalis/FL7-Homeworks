var rawArgs = process.argv.slice(2);
  var args = [];

  rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
      if(val !== '') args.push(+val);
    });
  });

var avg = function(...args) {
  let sum = 0;
  for(let i = 0; i< args.length; i++) {
    sum += args[i];
  }
  let res = sum/args.length;
  return res;
}

  console.log(avg(...args));