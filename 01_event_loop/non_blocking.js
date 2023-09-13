const fs = require('fs');
console.log('Inicio del programa');
const data = fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log('Fin del programa');