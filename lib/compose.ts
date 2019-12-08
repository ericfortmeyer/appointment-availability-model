import { AvailabilityOfAll, CompositionOfAvailability, RepresentationOfAvailableDate, AvailablePeople, PersonID } from '../typings/index';
import { hash } from '../index';

/**
 * Use to create a data structure used in the presentation layer
 * 
 * @param availabilityOfAll The available dates of all people on the schedule
 */
export function compose(availabilityOfAll: AvailabilityOfAll): CompositionOfAvailability {
    return availabilityOfAll.reduce((map: CompositionOfAvailability, [personId, personAvailability]) => (
        personAvailability.reduce((map: CompositionOfAvailability, timeslot: Date) => {
            const hashOfTimeslot = hash([timeslot.getDay(), timeslot.getHours()]);
            let currentEntry = map.get(hashOfTimeslot) || [];
            map.set(hashOfTimeslot, addToCurrentEntry(currentEntry, personId));
            return map;
        }, map)
    ), new Map<RepresentationOfAvailableDate, AvailablePeople>());
}
function addToCurrentEntry(currEntry: AvailablePeople, currId: PersonID): AvailablePeople {
    return [...currEntry, currId];
}
