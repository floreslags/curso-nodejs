const fs = require('fs');
console.log('Inicio del programa');
const data = fs.readFileSync('file.txt','utf-8');
console.log(data);
console.log('Fin del programa');