
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
    var instructions ;

    instructions = data.filter((z, i) => {

        if (z == '') {
            reached_process = true;
        }


        if (reached_process) {
            return z;
        }
        
    }).map((k) => {//5 12
        return([parseInt(k[5]) , parseInt(k[12]), parseInt(k[k.length -1])])
    })


    data = data.map(item => item).reverse();
    var Stacks = []

    data = data.filter((x, i) => {

        if (x == '') {
            stop_index = i;
        }


        if (i > stop_index + 1) {
            return x
        }
        i++;
    })



    data.map((x) => {
        var initial = 0;
        var myobj = [];
        for (var i = 0; i < x.length; i++) {
            if (i == 0) {
                continue;
            }
            var a = x.substring(initial, i - 1)
            if (i % 4 == 0) {
                myobj.push(a);
                initial = i;
            }
            if (i == (x.length - 1)) {
                var b = x.substring((x.length - 3), x.length)
                myobj.push(b);
            }
        }
        Stacks.push(myobj);
    })

    Stacks = Stacks.map((x) => {

        x = x.map((y) => {
            if (y != "   ") {
                return y;
            } else {
                return '.';
            }
        })
        return x;
    })

    var AllStacks = [];

    for (var i = 0; i < Stacks.length; i++) {
        var stackObj = [];
        for (var j = 0; j < Stacks[0].length; j++) {

            stackObj.push(Stacks[j][i]);
        }
        AllStacks.push(stackObj)
    }

    AllStacks = AllStacks.map((x) => {
        x = x.filter((y) => {
            if (y == '.') {
            } else {
                return y;
            }
        })
        return x;
    })
    return [AllStacks , instructions];
}

// actual part 1

function process_instructions(stacks, instruct) {
    for (var i = 0; i < instruct.length; i++){
        var [n,  from_i , put_i] = instruct[i];

        for (var k = 0 ; k < n; k++){
            var item = stacks[(from_i - 1)].pop();
            stacks[(put_i - 1)].push(item);
        }
        
    }
}


var appData = getData(testData)
var [stacks, instruct] = splitData(appData)
process_instructions(stacks, instruct);

console.log(stacks)


