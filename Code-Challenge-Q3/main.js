
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

function find_duplicates(a, b,) {

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                return a[i]
            }
        }
    }
}

function main(data ,part2 = false) {
    var sum_total = 0;
    //part 2

    if (part2) {
        for (var i = 0; i < data.length; i = i + 3) {
            var the_duplicate = (find_duplicates(data[i], data[i + 1], data[i + 2]))
            sum_total += value_Asci(the_duplicate)
        }
    } else { // part 1
        for (var i = 0; i < data.length; i++) {
            var a = data[i].substr(0, (data[i].length / 2))
            var b = data[i].substr((data[i].length / 2))
            console.log(a , b , "\n");
           
        }
    }

    return sum_total;
}


function value_Asci(char) {
    if (char == char.toUpperCase()) {
        var value = ((char.charCodeAt(0)) - 38)
    } else {
        var value = ((char.charCodeAt(0)) - 96)
    }
    return value;
}


console.log(main(test_data));