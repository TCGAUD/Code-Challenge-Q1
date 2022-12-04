
const fs = require("fs");

var theData = './data.txt';
var testData = './testdata.txt';

function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}


var real_data = getData(theData);
var test_data = getData(testData);




function split_data(data){
    data = data.map((x)=>{
        var i = x.lastIndexOf(',');
        var a = x.substring(0, i).trim();
        var b = x.substring(i + 1).trim();
        return [a,b]
    })
    return data;
}


console.log(split_data(test_data));
