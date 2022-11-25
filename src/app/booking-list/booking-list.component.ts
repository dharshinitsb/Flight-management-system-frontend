import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import { Passenger } from '../model/passenger';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Observable<Booking[]>;
  passenger: Observable<Passenger[]>;
  constructor(private bookingService: BookingService, private router: Router,private passengerservice:PassengerService) {}
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.bookings = this.bookingService.getBookingsList();
    this.passenger = this.passengerservice.getUserList();
  }

  deleteBooking(bookingId: number) {
    this.bookingService.deleteBooking(bookingId)
    .subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  deletePassengerBooking(pnrNumber: number) {
    
    this.passengerservice.deletePassenger(pnrNumber)
    .subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  bookingDetails(bookingId: number) {
    this.router.navigate(['bookingDetails', bookingId]);
  }
  
  bookingPassengerDetails(passengerUIN: number) {
    this.router.navigate(['bookingDetails', passengerUIN]);
  }

  updateBooking(bookingId: number) {
    this.router.navigate(['updateBooking', bookingId])
    .then(() => {
      window.location.reload();
    });
  }
}



