import { CompositionOfAvailability, AvailablePeople, RepresentationOfAvailableDate, PersonID } from '../typings/index';

/**
 * Use to return the availability for one person
 * 
 * @param {CompositionOfAvailability}
 */
export function filter(selectedPerson: PersonID, availability: CompositionOfAvailability): CompositionOfAvailability {
    let result: CompositionOfAvailability = new Map<RepresentationOfAvailableDate, AvailablePeople>();
    availability.forEach((people: AvailablePeople, key: RepresentationOfAvailableDate) => {
        const filtered = people.filter((person: PersonID) => person === selectedPerson);
        setOrDelete(key, filtered, result);
    });
    return result;
    
    function setOrDelete(key: RepresentationOfAvailableDate, filtered: AvailablePeople, result: CompositionOfAvailability): void {
        filtered.length === 0 ? result.delete(key) : result.set(key, filtered);
    }
}
