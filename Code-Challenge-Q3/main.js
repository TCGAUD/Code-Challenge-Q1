
const fs = require("fs");

var theData = './data.txt';
var testData = './test.txt';

function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}


var real_data = getData(theData);
var test_data = getData(testData);



function find_duplicates(a, b) {
    var the_duplicates = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < j.length; j++) {
            if (a[i] == b[j]) {
                if (a[i] in the_duplicates){
                    continue
                } else {
                    the_duplicates.push(a[i])
                }
            }
        }
    }
}


function main() {

}
