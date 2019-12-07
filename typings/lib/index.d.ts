export type Availability = Date[];
export type PersonID = string;
export type Person = [PersonID, Availability];
export type AvailabilityOfAll = Person[];
export type DayOfWeek = number;
export type Hour = number;
export type DayAndHourTuple = [DayOfWeek, Hour];
export type Hash = string;
export type RepresentationOfAvailableDate = Hash;
export type AvailablePeople = PersonID[];
export type CompositionOfAvailability = Map<RepresentationOfAvailableDate, AvailablePeople>;
export type TableEntry = AvailablePeople;
