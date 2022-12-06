
const fs = require("fs");
// out inputs

var theData = './data.txt';
var testData = './test.txt';

//this gets the data nicely
function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}

console.log(getData(testData))