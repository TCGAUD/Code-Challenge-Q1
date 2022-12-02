var fs = require("fs");


fs.readFile('my_file.txt', 'utf8', function(err, data){
      
    // Display the file content
    console.log(data);
});