import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookingId: number;
 
  booking: Observable<Booking[]>;
  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.booking = this.bookingService.getBookingsList();
  }

  list(){
    this.router.navigate(['bookings']);
  }
}
