
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
    var the_duplicates = [];


    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                console.log("proc")
                for (var k = 0; k < c.length; k++) {
                    if (c[k] == a[i]) {
                        for (var p = 0; p < the_duplicates.length; p++) {
                            if (c[k] == the_duplicates[p]){
                                continue;
                            }
                            else {
                                the_duplicates.push(c[k])
                            }
                        }
                    }
                }

            }

        }
    }
    return the_duplicates;
}


function main() {

    console.log(test_data)

    console.log(find_duplicates(test_data[0], test_data[1], test_data[2]))

}


main();