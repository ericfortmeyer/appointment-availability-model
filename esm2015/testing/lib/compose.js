"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash = require("./hash");
function compose(availabilityOfAll) {
    return availabilityOfAll.reduce((map, [personId, personAvailability]) => (personAvailability.reduce((map, timeslot) => {
        const hashOfTimeslot = hash([timeslot.getDay(), timeslot.getHours()]);
        let currentEntry = map.get(hashOfTimeslot) || [];
        map.set(hashOfTimeslot, addToCurrentEntry(currentEntry, personId));
        return map;
    }, map)), new Map());
}
module.exports = compose;
function addToCurrentEntry(currEntry, currId) {
    return [...currEntry, currId];
}
//# sourceMappingURL=compose.js.map
