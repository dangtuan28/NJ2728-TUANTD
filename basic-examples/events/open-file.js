const { error } = require('console');
const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');
rs.on('open',function () {
    console.log('The file is opne ');

});
fs.readFile('./demofile.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;

    }
    console.log(data);
})