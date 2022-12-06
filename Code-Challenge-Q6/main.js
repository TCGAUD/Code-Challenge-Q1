
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

function isUniq(x){
    return new Set(x).size === x.length;
}

function part1(data) {

    // this variable should be 4 for part 1 and 14 for part 2 EASY
    var the_part = 4;

    var uniq = [];
    for (var i = 0; i < data.length; i++) {
        uniq.push(data[i])
        if (uniq.length > the_part){
            uniq.shift();
        }
        if (uniq.length == the_part && isUniq(uniq)){
            console.log(i+1)
            break;
        };
    }
}

var appData = getData(theData);
//var tess  = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
// part 1. 
console.log(part1(appData[0]));