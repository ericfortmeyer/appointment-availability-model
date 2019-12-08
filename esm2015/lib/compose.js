import { hash } from './index';
export function compose(availabilityOfAll) {
    return availabilityOfAll.reduce((map, [personId, personAvailability]) => (personAvailability.reduce((map, timeslot) => {
        const hashOfTimeslot = hash([timeslot.getDay(), timeslot.getHours()]);
        let currentEntry = map.get(hashOfTimeslot) || [];
        map.set(hashOfTimeslot, addToCurrentEntry(currentEntry, personId));
        return map;
    }, map)), new Map());
}
function addToCurrentEntry(currEntry, currId) {
    return [...currEntry, currId];
}
//# sourceMappingURL=compose.js.map