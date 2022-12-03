
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



function find_duplicates(a, b, c) {

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                for (var k = 0; k < c.length; k++) {
                    if (c[k] == a[i]) {
                        return c[k]
                    }
                }
            }
        }
    }

}

function main(data) {

    for (var i = 0; i < data.length; i = i + 3) {
      
        console.log(find_duplicates(data[i], data[i+1], data[i+2]))
    }


}


main(test_data);