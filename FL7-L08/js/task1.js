var a = parseInt(prompt("Input coefficient a"));
var b = parseInt(prompt("Input coefficient b"));
var c = parseInt(prompt("Input coefficient c"));

var resOnly, res1, res2;

var d = Math.pow(b, 2) - 4 * a * c;

res1 = (-1 * b + Math.sqrt(d) / (2 * a));
res2 = (-1 * b - Math.sqrt(d) / (2 * a));

console.log(`Рівняння виду ${a}x^2+${b}x+${c} = 0 має 2 розв'язки: x1 = ${res1}, x2 = ${res2}`);