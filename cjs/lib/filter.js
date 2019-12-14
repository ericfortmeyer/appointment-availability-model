"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(selectedPerson, availability) {
    let result = new Map();
    availability.forEach((people, key) => {
        const filtered = people.filter((person) => person === selectedPerson);
        setOrDelete(key, filtered, result);
    });
    return result;
    function setOrDelete(key, filtered, result) {
        filtered.length === 0 ? result.delete(key) : result.set(key, filtered);
    }
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map