const fs = require('fs');
const fileName = 'mynewfile2.txt';
const content =  'Hello Tuan!';
try {
    fs.appendFileSync(fileName,content);
    console.log('Saved!');
    
} catch (error) {
    console.log(error);
    
}