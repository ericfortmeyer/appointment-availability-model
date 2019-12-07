# The hashing function

## Used to create a representation of an available timeslot

Requirements:
1. idempotent
2. Always creates a unique hash for a given representation of an available timeslot

The function takes a tuple representing the day of the week paired with the hour of the day that the timeslot represents and returns a hash.  The hash can be used to locate a timeslot on a map having the resulting hashes as keys.

```typescript
const tuple = [day, hour];
const key = hash(tuple);
```
[The README file](../README.md)
