
const fs = require("fs");

var theData = './data.txt';
var testData = './test.txt';

function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}

function splitData(data) {

    var stop_index = data.length;

    var reached_process = false;
    var instructions;

    instructions = data.filter((z, i) => {
        if (z == '') {
            reached_process = true;
        }

        if (reached_process) {
            return z;
        }

    }).map((k) => {//5 12
        console.log(k)
        
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

// actual part 1

function process_instructions(stacks, instruct) {
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
    return outputString;

}


var appData = getData(theData)
var [stacks, instruct] = (splitData(appData))
//var part1_out = process_instructions(stacks, instruct);

//console.log(part1_out)


