"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var hash = require("./hash");
var compose = function(availabilityOfAll) {
    return availabilityOfAll.reduce(function (map, _a) {
        var personId = _a[0], personAvailability = _a[1];
        return (personAvailability.reduce(function (map, timeslot) {
            var hashOfTimeslot = hash([timeslot.getDay(), timeslot.getHours()]);
            var currentEntry = map.get(hashOfTimeslot) || [];
            map.set(hashOfTimeslot, addToCurrentEntry(currentEntry, personId));
            return map;
        }, map));
    }, new Map());
}
module.exports = compose;
function addToCurrentEntry(currEntry, currId) {
    return __spreadArrays(currEntry, [currId]);
}
//# sourceMappingURL=compose.js.map
