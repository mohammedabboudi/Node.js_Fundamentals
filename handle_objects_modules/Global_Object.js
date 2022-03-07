// require modules using the require method :

const path = require('path');

// the value variables are not stored in the global object :

let name1 = 'muhamed';
const name2 = 'muhamed';
var name3 = 'muhamed';

console.log(global.name1);
console.log(global.name2);
console.log(global.name3);

// intro to extra stuff in node.js :

const upperCaseName = name3.toUpperCase();
const lowerCaseName = upperCaseName.toLowerCase();

console.log(upperCaseName);
console.log(lowerCaseName);

console.log(__dirname);
console.log(__filename);

console.log(path.basename('C:\\temp\\myfile.html'));

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

