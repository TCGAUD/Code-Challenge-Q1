const fs = require("fs");


var theData = './theData.txt';

function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}

var realData = getData(theData);

var testData = ["A Y", "B X", "C Z"];


function win_lose_draw(opponent, me, part2 = false) {

    //part 2
    if (part2 == true) {
        if (me == "X") return -1
        if (me == "Y") return 0
        if (me == "Z") return 1
    }

    //part 1
    if (opponent == "A") {
        if (me == "Y") return 1;
        if (me == "X") return 0;
        if (me == "Z") return -1;
    }

    if (opponent == "B") {
        if (me == "Z") return 1;
        if (me == "Y") return 0;
        if (me == "X") return -1;
    }

    if (opponent == "C") {
        if (me == "X") return 1;
        if (me == "Z") return 0;
        if (me == "Y") return -1;
    }
}


function mainFunction(myData, part2 = false) {

    var total_points = 0;
    

    for (var i = 0; i < myData.length; i++) {
        

        if (part2 == true) {
            
            var result = win_lose_draw(myData[i][0], myData[i][2], true);
            
            var myy_input = part2_returns(myData[i][0], result)
            
            var points = calculatePoints(result, myy_input, part2);

            console.log(points)
        } else {
            
            var result = win_lose_draw(myData[i][0], myData[i][2]);
            var points = calculatePoints(result, myData[i][2]);
        }

        
        total_points += points;

    }

    return total_points;
}

function calculatePoints(results, myInput) {

    var points_per_round = 0;

    switch (results) {
        case -1:
            break;
        case 0:
            points_per_round += 3;
            break;
        case 1:
            points_per_round += 6;
    }

    switch (myInput) {
        case "X":
            points_per_round += 1;
            break;
        case "Y":
            points_per_round += 2;
            break;
        case "Z":
            points_per_round += 3;
    }


    return points_per_round;
}


console.log(mainFunction(realData, true))


function part2_returns(opponent, myResult) {
    switch (myResult) {
        case -1:
            if (opponent == "A") return "Z";
            if (opponent == "B") return "X";
            if (opponent == "C") return "Y";
            break;

        case 0:
            if (opponent == "A") return "X";
            if (opponent == "B") return "Y";
            if (opponent == "C") return "Z";


        case 1:
            if (opponent == "A") return "Y";
            if (opponent == "B") return "Z";
            if (opponent == "C") return "X";
    }
}



// Notes. I could have used Tuples, making my life easier. 
// Could have used a better approach as well
// But it works as expected