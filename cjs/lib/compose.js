"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function compose(availabilityOfAll) {
    return availabilityOfAll.reduce((map, [personId, personAvailability]) => (personAvailability.reduce((map, timeslot) => {
        const hashOfTimeslot = index_1.hash([timeslot.getDay(), timeslot.getHours()]);
        let currentEntry = map.get(hashOfTimeslot) || [];
        map.set(hashOfTimeslot, addToCurrentEntry(currentEntry, personId));
        return map;
    }, map)), new Map());
}
exports.compose = compose;
function addToCurrentEntry(currEntry, currId) {
    return [...currEntry, currId];
}
//# sourceMappingURL=compose.js.map