# The compose function

## Use to create a data structure used in the presentation layer of the application

Requirements
1. efficient lookup
2. ease of use where a tabular design is used by the presentation layer to display availability

The concept of the data structure is based on a *table* where the columns are days and the rows are hours of the day.  It's structure however is a map having keys that are hashes of the coordinates of the timeslot on the *table*. The values in the map are buckets containing whatever the application uses to identify the individuals that are available during the given timeslot.

```typescript
const availablityOfAll = [
    [person1ID, person1Availability],
    [person2ID, pserson2Availability],
    /* ... */
];
const availability = compose(availabilityOfAll);

/* one possibility... */

const timeslot = hash([day, hour]);

const availablePeople = availability.get(timeslot);

/* or */

for (day of week) {
    for (hour of day) {
        if (availability.has(timeslot)) {
            // display
        } else {
            // don't display
        }
    }
}

/* also to select an individual */

for (day of week) {
    for (hour of day) {
        if (availability.get(timeslot).includes(id)) {
            // display
        } else {
            // don't display
        }
    }
}
```

[The README file](../README.md)
