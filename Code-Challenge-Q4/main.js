
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


<<<<<<< HEAD
<<<<<<< HEAD

=======
var duplicatt = 0;
>>>>>>> parent of 700a516 (Q3)
=======

>>>>>>> parent of 050013f (Merge branch 'main' of https://github.com/TCGAUD/Code-Challenge-Q1)

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
<<<<<<< HEAD
<<<<<<< HEAD
        if (overlapBool) {
            total_overlaps += 1;

        }
=======
        var duplic = part2(low, high)
        console.log(duplic);
        if (overlapBool) {
            total_overlaps += 1;
        }
        if (duplic) {
            duplicatt += 1;
        }

>>>>>>> parent of 700a516 (Q3)
=======
        if (overlapBool) {
            total_overlaps += 1;

        }
>>>>>>> parent of 050013f (Merge branch 'main' of https://github.com/TCGAUD/Code-Challenge-Q1)
        //console.log(overlapBool)
        //console.log(low , high)
        return [low, high]
    })

    return total_overlaps;
}

function anaylze_data(low, high) {
<<<<<<< HEAD
<<<<<<< HEAD
    //console.log(low)
=======
    
>>>>>>> parent of 700a516 (Q3)
=======
    //console.log(low)
>>>>>>> parent of 050013f (Merge branch 'main' of https://github.com/TCGAUD/Code-Challenge-Q1)

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
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

=======
function part2(low, high){
    console.log(low, high)
=======
function part2(low, high){
    
    console.log(low, high)

>>>>>>> parent of 700a516 (Q3)
    if (parseInt(low[0]) == parseInt(low[1])){
        return 1;
    }
    if (parseInt(high[0]) == parseInt(high[1])){
        return 1;
    }
=======
>>>>>>> parent of 050013f (Merge branch 'main' of https://github.com/TCGAUD/Code-Challenge-Q1)

<<<<<<< HEAD
    if (low[0] == high[1]){
=======

<<<<<<< HEAD
   if (parseInt(low[0]) > parseInt(low[1])){
    
    if (parseInt(high[1]) >= parseInt(low[0])){
>>>>>>> parent of 700a516 (Q3)
        return 1;
    }

    if (low[1] == high[0]){
        return 1;
    }

    if (parseInt(low[0]) < parseInt(low[1])){
        if (parseInt(high[0]) > parseInt(low[1])){
            return 1;
        }
        if (parseInt(high[0]) > parseInt(high[1])){
            return 1;
        }
        return 0;
    }
<<<<<<< HEAD

    if (parseInt(low[0]) > parseInt(low[1])){
        if (parseInt(high[0]) > parseInt(high[1])){
            return 1;
        }
        if (parseInt(high[0]) < parseInt(high[1])){
            return 1;
        }
=======
   
   } else {
    if (parseInt(high[0]) >= parseInt(low[1])){
        return 1;
    }else {
>>>>>>> parent of 700a516 (Q3)
        return 0;
    }
    return 0;

}
<<<<<<< HEAD
>>>>>>> parent of c518e8d (Update main.js)
=======
>>>>>>> parent of 700a516 (Q3)
=======

>>>>>>> parent of 050013f (Merge branch 'main' of https://github.com/TCGAUD/Code-Challenge-Q1)


//part 1

var app_data = split_data(real_data);

var overlaps = no_subSets(app_data)
console.log(overlaps)
<<<<<<< HEAD
<<<<<<< HEAD
//console.log(app_data)






=======
console.log(duplicatt)

=======
//console.log(app_data)
>>>>>>> parent of 050013f (Merge branch 'main' of https://github.com/TCGAUD/Code-Challenge-Q1)







>>>>>>> parent of 700a516 (Q3)
