
const fs = require("fs");
// out inputs

var theData = './data.txt';
var testData = './test.txt';

//this gets the data nicely
function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}

// This function sorts all the data
function splitData(data) {

    var stop_index = data.length;

    var reached_process = false;
    var instructions = [];

    instructions = data.filter((z, i) => {
        if (z == '') {
            reached_process = true;
        }

        if (reached_process) {
            return z;
        }

    }).map((k) => {//5 12
        var a = k.indexOf(' ');
        var b = k.indexOf(' ', (a + 1));
        //
        var the_no = k.substring((a + 1), b);
        var c = (k.lastIndexOf('m') + 2);
        var d = (k.indexOf('t') - 1);
        //
        var the_mid = k.substring(c, d);
        var the_last = k.substring((k.length - 1));
        //console.log(the_no)
        return([parseInt(the_no), parseInt(the_mid), parseInt(the_last)])
    })

    data = data.map(item => item).reverse();

    data = data.filter((x, i) => {

        if (x == '') {
            stop_index = i;
        }

        if (i > stop_index + 1) {
            return x
        }
        i++;
    })

    data = data.map((x) => {
        var initial = 0;
        var myobj = [];
        for (var i = 0; i < x.length; i++) {
            if (i == 0) {
                continue;
            }
            var a = x.substring(initial, i - 1)
            if (i % 4 == 0) {
                //console.log(a)
                myobj.push(a);
                initial = i;
            }
            if (i == (x.length - 1)) {
                var b = x.substring((x.length - 3), x.length)
                myobj.push(b);
            }
        }
        return myobj;
    })


    var counter = 0;
    var full_stack = [];

    for (var i = 0; i < data[0].length; i++) {

        var item_stack = [];

        for (var k = 0; k < data.length; k++) {
            item_stack.push(data[k][i]);
        }
        full_stack.push(item_stack);
    }
    full_stack = full_stack.map((x) => {
        x = x.filter((y) => {
            if (y != '   ') {
                return y;
            }
        })
        return x;
    })
    
    return [full_stack , instructions];
}

// Function above is ALOT to explain -> probably better ways.
// But i wanted to make function to make data usable for funzies instead of hard-editing
//But why? Because this function will work on DATA that supports format. instead of harcoding arrays
// actual part 1

function process_instructions(stacks, instruct , part2 = false) {
    for (var i = 0; i < instruct.length; i++) {
        var [n, from_i, put_i] = instruct[i];

        for (var k = 0; k < n; k++) {
            var item = stacks[(from_i - 1)].pop();
            stacks[(put_i - 1)].push(item);
        }
        
    }
    //get output for question
    var outputString = "";
    for (var o = 0; o < stacks.length; o++) {
        var each_stack = stacks[o].map((x) => {
            return (x[1])
        })
        outputString += each_stack.pop()
    }
    console.log('Part 1 : ' , outputString)
    return outputString;

}
// part 2
function process_part2(stacks, instruct) {
    for (var i = 0; i < instruct.length; i++) {
        var [n, from_i, put_i] = instruct[i];
        
        var part2OBJ = []

        for (var k = 0; k < n ; k++) {
            var item = stacks[(from_i - 1)].pop();
            part2OBJ.push(item);
        }
        for (var m = 0; m < n; m++) {
            var to_move = part2OBJ.pop();
            stacks[(put_i - 1)].push(to_move);
            
        }
    }
    //get output for question
    var outputString = "";
    for (var o = 0; o < stacks.length; o++) {
        var each_stack = stacks[o].map((x) => {
            return (x[1])
        })
        outputString += each_stack.pop()
    }
    console.log('Part 2 : ' , outputString)
    return outputString;

}

var appData = getData(testData)
var [stacks, instruct] = (splitData(appData))
// Dont run process 1 and 2 at the same time. Each processes changed data. The inputs can fail then
// Why tho ? Because thats math and i overwrited the stacks instead of duplicating. 

var part1_out = process_instructions(stacks, instruct);
//var part2_out = process_part2(stacks, instruct);
