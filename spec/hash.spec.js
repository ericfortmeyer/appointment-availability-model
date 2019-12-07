const rangeOfTuples = require("./helpers/rangeOfTuples");
const range = require("./helpers/range");
const compareArrays = require("./helpers/compareArrays");
var hash = require("./../dist/lib/hash");

/**
 * @see {@link ../docs/hash.md} for specification
 */
describe('The hash function', () => {
    it('should be idempotent', () => {
        const allResultsAreEqual = range(0, 10).map(() => {
            return rangeOfTuples({start: 0, end: 6}, {start: 0, end: 23}).map((tuple) => hash(tuple));
        }).reduce((acc, result, _, arr) => {
            return acc && compareArrays(result, arr[0]);
        }, true)
        expect(allResultsAreEqual).toBe(true);
    });
    
    it('should always create a unique hash for a given representation of a timeslot', () => {
        const result = rangeOfTuples({start: 0, end: 6}, {start: 0, end: 23}).map((tuple) => hash(tuple));
        const duplicatesRemoved = new Set(result);
        expect(result.length).toEqual(duplicatesRemoved.size);
    })
})
