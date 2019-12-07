const compose = require('../dist/lib/compose');
const range = require('./helpers/range');
const hash = require('../dist/lib/hash');
/**
 * @see {@link ../docs/compose.md}
 * 1. Efficient lookup
 * 2. Can be used to display availability of all
 * 3. Can be used to display availability of one person
 */
describe('The compose function', () => {
    it('produces a structure that has efficient lookup of values', () => {
        const timer = new Timer();
        const structure = compose(generateFakeAvailability());
        timer.start();
        range(0, 10000).map(() => {
            range(0, 6).map((day) => {
                const hour = 0;
                const key = hash([day, hour]);
                structure.get(key);
            });
        });
        timer.end();
        const timeOfExecution = timer.result();
        const thresholdInMills = 30;
        expect(timeOfExecution).toBeLessThan(thresholdInMills);
    });

    it('produces a structure that can be used to display the availability of all', () => {
        const availability = compose(generateFakeAvailability());
        const day = 4;
        const hour = 0;
        const dateRepresentation = hash([day, hour]);
        if (availability.get(dateRepresentation) !== undefined) {
            expect(true).toBe(true);
        } else {
            fail('The test could not retrieve the list of available people');
        }
    });

    it('produces a structure that can be used to display the availability of one person', () => {
        const firstPerson = 'fakeID1';
        const secondPerson = 'fakeID2';
        const ts = 21600000;
        const daysInMills = 86400000;
        const date1 = new Date(ts);
        const fakeAvailability = [firstPerson, [date1, new Date(ts + (daysInMills * 2))]];
        const fakeAvailability2 = [secondPerson, [new Date(ts + (daysInMills)), new Date(ts + (daysInMills * 3))]];
        const availability = compose([fakeAvailability, fakeAvailability2]);
        const expectedFirstTimeslotOfFirstPerson = hash([4, 0]);
        const expectedSecondTimeslotOfFirstPerson = hash([6, 0]);
        const expectedFirstTimeslotOfSecondPerson = hash([5, 0]);
        const expectedSecondTimeslotOfSecondPerson = hash([0, 0]);

        const testsPassed =
        availability.get(expectedFirstTimeslotOfFirstPerson).includes(firstPerson)
          && availability.get(expectedSecondTimeslotOfFirstPerson).includes(firstPerson)
          && availability.get(expectedFirstTimeslotOfSecondPerson).includes(secondPerson)
          && availability.get(expectedSecondTimeslotOfSecondPerson).includes(secondPerson)
          && !availability.get(expectedSecondTimeslotOfSecondPerson).includes(firstPerson);

        if (testsPassed) {
            expect(true).toBe(true);
        } else {
            fail('Could not find available people in their respective timeslots');
        }
    });
});

function generateFakeAvailability() {
    return range(0, 10).map((num) => {
        const ts = 21600000;
        const daysInMills = 86400000;
        const date1 = new Date(ts);
        return [
            `fakeID${num}`,
            [date1, ...range(1, 7).map((days) => new Date(ts + (days * daysInMills)))]
        ]
    });
}

class Timer {
    s;
    e;
    start = () => this.s = new Date();
    end = () => this.e = new Date();
    result = () => (this.e - this.s);
}
