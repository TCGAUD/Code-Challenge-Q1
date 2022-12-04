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

function split_data(data) {
    data = data.map((x) => {
        var i = x.lastIndexOf(',');
        var a = x.substring(0, i).trim();
        var b = x.substring(i + 1).trim();
        return [a, b]
    })
    return data;
}

var duplicatt = 0;

function no_subSets(data) {
    var total_overlaps = 0;
    data = data.map((x) => {
        var low = [], high = [];
        x = x.map((y) => {
            var split_point = y.lastIndexOf('-');
            low.push(y.substring(0, split_point))
            high.push(y.substring(split_point + 1))
        })
        var overlapBool = (anaylze_data(low, high))
        //part 2 function
        var duplic = part2(low, high)
        //
        if (overlapBool) {
            total_overlaps += 1;
        } // part 2
        if (duplic) {
            duplicatt += 1;
        }
        return [low, high]
    })
    return total_overlaps;
}

function anaylze_data(low, high) {
    if (parseInt(low[0]) == parseInt(low[1])) {
        return 1;
    }
    if (parseInt(high[0]) == parseInt(high[1])) {
        return 1;
    }
    if (parseInt(low[0]) < parseInt(low[1])) {
        if (parseInt(high[0]) >= parseInt(high[1])) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (parseInt(high[0]) < parseInt(high[1])) {
            return 1;
        } else {
            return 0;
        }
    }
}
function part2(low, high){
    if (parseInt(low[0]) == parseInt(low[1])){
        return 1;
    }



function getSections(data){

    var theItem = []
    
    data.map((item) => {
        for (var i = 0 ; i < item.length ; i++){
            var eachItem = []
            var split_point = item[i].lastIndexOf('-');
            eachItem.push(item[i].substring(0, split_point))
            eachItem.push(item[i].substring(split_point + 1))
            theItem.push(eachItem);
        }
    })
    return theItem
}

function getAll_overlaps (){

}

//part 1

var app_data = split_data(test_data);
var overlaps = no_subSets(app_data)
//console.log(overlaps)


//part 2
var all_sections =getSections(app_data);
getAll_overlaps(all_sections);
console.log(all_sections)







