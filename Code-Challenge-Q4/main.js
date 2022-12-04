
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


function no_subSets(data){

    var total_overlaps = 0;

    data = data.map((x)=>{
        var low = [], high = [];
        x = x.map((y)=>{
            var split_point = y.lastIndexOf('-');
            low.push(y.substring(0 , split_point))
            high.push(y.substring(split_point + 1))
        })
        var overlapBool = (anaylze_data(low , high))
        if (overlapBool){
            total_overlaps += 1;
        }

        return [low, high]
    })
    //console.log(data)
    return total_overlaps;
}

function anaylze_data(low, high){
    if (low[0] >= low[1]){
        if (high[0] <= high[1]){
            return 1;
        }else {
            0;
        }
    }
    if (low[1] >= low[0]){
        if (high[1] <= high[0]){
            return 1;
        }else {
            return 0;
        }
    }
}

var app_data = split_data(real_data);
var overlaps = no_subSets(app_data)

console.log(overlaps)
