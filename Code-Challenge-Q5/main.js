
const fs = require("fs");
const { get } = require("http");

var theData = './data.txt';
var testData = './test.txt';

function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    const arr = myData.split(/\r?\n/);
    return arr;
}

function splitData(data) {
    var stop_index = data.length;
    var instructions = [];

    var stacks = data;

    var stack_item = [];
    var counter = 0;

   

    stacks = stacks.map((x) => {
        x = x.split(' ');
        console.log(x.length)

        for (var i = 0; i  < x.length; i++) {
            if (i % 4 == 0) {
                if (x[i] != ''){
                    if (stack_item.length <= counter){
                        stack_item.push([]);
                    }
                    stack_item[counter].push(x[i]);
                }
                else{
                    if (stack_item.length <= counter){
                        stack_item.push([]);
                    }
                    stack_item[counter].push('');
                }
                counter++;
            }
            //console.log(stack_item)
        }
        return x;
    })

    //console.log(stack_item)

    instructions = data.filter((x, i) => {
        if (i > stop_index) {
            return x;
        }
    })

    instructions = instructions.map((x) => {
        var items = [];
        items.push(x[5], x[12], x[17])
        return items;

    })

    return [stacks, instructions];

}

var appData = getData(testData)
var [stacks, instructions] = splitData(appData)

//console.log(stacks)

function process_instructions() {

}