import { DayAndHourTuple, Hash } from "../typings/lib"

/**
 * Use to create a representation of a day * hour pair
 * 
 * The resulting hash may be used as a key in a map
 * enabling efficient lookup of availability
 * @param tuple Day of the week and hour paired together
 */
export function hash(tuple: DayAndHourTuple): Hash {
    return [...tuple].toString();
}
