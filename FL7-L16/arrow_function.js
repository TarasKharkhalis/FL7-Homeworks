var inputs = process.argv.slice(2);
var result = inputs.map((string) => string.charAt(0))
                   .reduce((x, y) => x += y);
console.log(result);