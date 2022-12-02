

const min_stars = 50;
var int_calories_carrying = 0;


import {mydatam} from './my_data.js'



var testdata = [
    [1000,
2000,
3000],

[4000],

[5000,
6000],

[7000,
8000,
9000],

[10000]
];

var sumEach = (inputD) => {
    var thelength = inputD.length;
    var totalSum = 0;
    
    for (var i = 0 ; i < thelength ; i++){
        totalSum += inputD[i]
    }
    
    return totalSum;
}




var getTop3 = (mydata) => {
    var theMax = 0;
    var theSecond = 0;
    var theThird = 0;
    
    //1st
    for (var i = 0; i < mydata.length ; i++){
        var theSum = sumEach(mydata[i]);
        if (theSum > theMax){
            theMax = theSum;
        }
    }
    //2nd
    for (var i = 0; i < mydata.length ; i++){
        var theSum = sumEach(mydata[i]);
        if (theSum < theMax){
            if (theSum > theSecond){
                theSecond = theSum
            }
        }
    }
    //3rd
        for (var i = 0; i < mydata.length ; i++){
        var theSum = sumEach(mydata[i]);
        if (theSum < theSecond){
            if (theSum > theThird){
                theThird = theSum
            }
        }
    }
    return {
        "1st" : theMax,
        "2nd" : theSecond,
        "3nd" : theThird,
        "sum of  3" : (theMax + theSecond + theThird)
    };
}

console.log((getTop3(mydatam)))











//part 2 Find top 3

