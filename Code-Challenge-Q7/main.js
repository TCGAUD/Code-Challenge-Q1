
const fs = require("fs");
// out inputs

var theData = './data.txt';
var testData = './test.txt';

//this gets the data nicely
function getData(file) {
    var myData = fs.readFileSync(file, 'utf-8')
    var arr = myData.split(/\r?\n/);

    //replace cd / with main
    arr = arr.map((item) =>{
        if (item.includes('cd /')){
            return "main"
        }else {
            return item;
        }
    })

    return arr;
}


var appData = getData(testData)
console.log(appData);

function makeDirectory (data){
    var n_indents = 0;
    var outstring = `\ta\t`;
    var current_p = '';
    data = data.map((item)=>{
        console.log(current_p)
        if(item.includes('$')){
            current_p = commandLine(item);

            if (current_p == 'open'){
                n_indents++;
                outstring += indent_process(n_indents);

            }
            if (current_p == 'back'){
                n_indents--;
                outstring += indent_process(n_indents);
            }

        }else {
            if (current_p == 'i'){
                outstring += `\n${item}`
            }
            
        }
    })

    return outstring;
}

var commandLine = (item) => {
    if (item.includes('ls')){
        return 'i';
    }
    if (item.includes('cd ')){
        return 'open';
    }
    if (item.includes('cd ..')){
        return 'back';
    }
}

var indent_process = (na) =>{
    console.log('aa')
    var out = '';
    for (var i = 0; i <= na ; i++){
        out += '\t'
    }
    return out;
}


console.log(makeDirectory(appData))
console.log('\t\tA')