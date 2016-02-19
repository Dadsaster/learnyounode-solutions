var fs = require('fs');

fs.readdir(process.argv[2], function(err, files) {
    files.forEach(function(file) {
        var tail = file.split('.')[1];
        if (tail === process.argv[3]) {
            console.log(file);
        }
    });
});
