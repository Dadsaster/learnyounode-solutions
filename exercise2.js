var sum = function (numArray) {
    return numArray.reduce(function(a, b) {
        return Number(a) + Number(b);
    });
};

var nums = process.argv.slice(2);
console.log(sum(nums));
