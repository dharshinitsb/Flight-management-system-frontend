import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.component';
import { Passenger } from '../model/passenger';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent implements OnInit {

  flights: Observable<Flight[]>;
  passenger: Observable<[Passenger]>;

  constructor() { }

  ngOnInit(): void {
  }

}
