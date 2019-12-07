# Appointment Availability Model

## A generic domain model for use in scheduling applications

This library is used to model the availability of tradespersons in a data structure that can be used in the presentation layer of the application.

The data structure was designed for
1. efficient lookup
2. ease of use where a tabular design is used by the presentation layer to display availability

The concept of the data structure is based on a *table* where the columns are days and the rows are hours of the day.  It's structure however is a map having keys that are hashes of the coordinates of the timeslot on the *table*. The values in the map are buckets containing whatever the application uses to identify the individuals that are available during the given timeslot.

[The Hash Function](./docs/hash.md)

[The Compose Function](./docs/compose.md)
