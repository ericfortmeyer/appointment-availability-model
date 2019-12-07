const range = function(start, end) {
    let acc = [];
    for (let i = start; i <= end; i++) {
        acc.push(i);
    }
    return acc;
}
module.exports = range;
