var fs = require('fs');

module.exports = function(dirName, ext, callback) {
    fs.readdir(dirName, function(err, files) {
        if (err) throw err;
        var filtered = files.filter(function(file) {
            var tail = file.split('.')[1];
            if (tail === ext) {
                return file;
            }
        });
        return callback(null, filtered);
    });

}
