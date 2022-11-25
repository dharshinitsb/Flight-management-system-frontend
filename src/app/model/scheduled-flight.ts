import { Schedule } from './schedule';
import { Flight } from './flight.component';
import { Airport } from './airport.component';

export class ScheduledFlight {
    scheduleFlightId: number;
    flight: Flight;
    availableSeats: number;
    schedule: Schedule;
    airport:Airport
}
