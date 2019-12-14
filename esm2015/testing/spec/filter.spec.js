const filter = require('../lib/filter');
const compose = require('../lib/compose');
const range = require('./helpers/range');
describe('The filter function', () => {
    it('should only return the availability of the person with the given id', () => {
        const givenID = 'the-selected-person';
        const fakeIDs = range(1, 21).map((int) => `id_0000-${int * 1000}-0000-fakety-fake-fake`);
        const composed = compose(generateFakeAvailability());
        const result = filter(givenID, composed);
        result.forEach((availablePeople) => {
            fakeIDs.forEach((idThatShouldNotBeThere) => {
                expect(availablePeople).not.toContain(idThatShouldNotBeThere);
            });
            expect(availablePeople).toContain(givenID);
        });
        function generateFakeAvailability() {
            const ts = 21600000;
            const daysInMills = 86400000;
            const date1 = new Date(ts);
            return [givenID, ...fakeIDs].map((id) => {
                return [id, [date1, ...range(1, 7).map((days) => new Date(ts + (days * daysInMills)))]];
            });
        }
    })
});


