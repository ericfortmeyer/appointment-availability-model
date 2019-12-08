const rangeOfTuples = function(a = {start, end}, b = {start, end}) {
    let acc = [];
    for (let i = a.start; i <= a.end; i++) {
        for (let j = b.start; j <= b.end; j++) {
            acc = [...acc, [i, j]];
        }
    }
    return acc;
}
module.exports = rangeOfTuples;
