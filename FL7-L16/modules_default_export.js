var arg1 = process.argv[2];
var arg2 = process.argv[3];

import m from './Math';

console.log(m.PI);
console.log(m.sqrt(+arg1));
console.log(m.square(+arg2));