var fs = require('fs');

fs.readFile(process.argv[2], function(file){
    var lines = file.toString().split("\n");
    console.log(lines.length - 1);
});
