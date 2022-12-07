


const fs = require("fs");

// read in day1input.txt using readFileSync
const input = fs.readFileSync("data.txt", "utf8").split("\r\n");

// create a map of directories and their sizes
const dirMap = new Map<string, number>();

// the current directory
let currentDir = "";
// iterate through each line of input
for (let i = 0; i < input.length; i++) {
    // if the line starts with "$" then it is a command
    if (input[i].startsWith("$")) {
        // split the line into an array of words
        const words = input[i].split(" ");
        // if the command is "cd" then change the current directory
        if (words[1] === "cd") {
            // if the directory is "/" then go to the root directory
            if (words[2] === "/") {
                currentDir = "";
            }
            // if the directory is ".." then go up one directory
            else if (words[2] === "..") {
                // split the current directory by "/"
                const dir = currentDir.split("/");
                // remove the last directory
                dir.pop();
                // rejoin the directory
                currentDir = dir.join("/");
            } else {
                // if the directory is not ".." then add it to the current directory
                currentDir += "/" + words[2];
            }
        } else if (words[1] === "ls") {
            // if the command is "ls" then stay in the current directory

        }
    } else if (input[i].startsWith("dir")) {
        // if the line starts with "dir" then it is a directory
        // split the line into an array of words
        const words = input[i].split(" ");
        // add the directory to the map if it does not exist
        if (!dirMap.has(currentDir)) {
            dirMap.set(currentDir, 0);
        }
    } else {
        // if the line does not start with "$" or "dir" then it is a file
        // split the line into an array of words
        const words = input[i].split(" ");
        // add the file to the map if it does not exist
        if (!dirMap.has(currentDir)) {
            dirMap.set(currentDir, 0);
        }
        // add the size of the file to the map
        dirMap.set(currentDir, dirMap.get(currentDir)! + parseInt(words[0]));

        // add the size of the file to the parent directories
        // split the current directory by "/"
        const dirs = currentDir.split("/");
        // iterate through the parent directories
        for (let j = dirs.length - 1; j >= 0; j--) {
            // get the parent directory
            const parentDir = dirs.slice(0, j).join("/");
            // add the size of the file to the parent directory
            dirMap.set(parentDir, dirMap.get(parentDir)! + parseInt(words[0]));
        }
    }
}

// part 1
let total = 0;
// // iterate through the map and total the directories with a size less than or equal to 100000

dirMap.forEach((value, key) => {
    if (value <= 100000) {
        total += value;
    }
});

console.log(total);

// part 2
let unused = 70000000 - dirMap.get("")! / 2;
// console.log(unused);

let spaceNeeded = 30000000 - unused;
// console.log(spaceNeeded);

let smallest = 99999999;
// print out all directories and their sizes with a size greater than or equal to spaceNeeded
dirMap.forEach((value, key) => {
    if (value >= spaceNeeded) {
        if (value < smallest) {
            smallest = value;
        }
    }

});

console.log(smallest);


// COPIED FROM  DeepHorse from reddit
// This is not my code
// All credit goes to  https://www.reddit.com/user/DeepHorse/
// The parsing data goes beyond my scope of knoweledge [maps -> idk -> too bad]