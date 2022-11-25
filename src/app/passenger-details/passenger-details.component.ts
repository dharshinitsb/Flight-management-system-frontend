import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking.component';
import { Passenger } from '../model/passenger';
import { BookingService } from '../services/booking.service';
import { PassengerService } from '../services/passenger.service';
import { CustomerroleGuard } from '../shared/customerrole.guard';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  passenger: Passenger={
    "pnrNumber": 4360393388, "passengerName": "", "passengerUIN": 0, "passengerAge": 0, "luggage": 0
  };
  booking: Booking = {

    "bookingId":0,"bookingDate":"","noOfPassengers":0
  };
  submitted = false;

  constructor(private router:Router,private service:PassengerService,private bookingservice:BookingService,
    private guard:CustomerroleGuard) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.createPassenger(this.passenger).subscribe();
    this.guard.canActivate();
    this.router.navigate(["searchFlight"]);

      this.submitted = true;
      this.save();
  
  }
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.passenger.passengerName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }
  ageFlag:boolean=false;
  validateAge(){
      let phone=this.passenger.passengerAge;
      if(phone>=100){
          this.ageFlag=true;
      }else{
          this.ageFlag=false;
      }
  }
  uinFlag:boolean=false;
  validateUin(){
      let phone=String(this.passenger.passengerUIN);
      if(phone.length==12){
          this.uinFlag=false;
      }else{
          this.uinFlag=true;
      }
  }
  luggageFlag:boolean=false;
  validateLuggage(){
      let phone=this.passenger.luggage;
      if(phone<=10){
          this.luggageFlag=false;
      }else{
          this.luggageFlag=true;
      }
  }

  buttonFlag:boolean=true;
  enableButton(){
      this.buttonFlag=this.nameFlag||this.ageFlag||this.uinFlag||this.luggageFlag;
  }
  
 
  

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save() {
    this.bookingservice.createBooking(this.booking)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.booking = new Booking();
    this.gotoList();
  }

 

  gotoList() {
    this.router.navigate(['/bookings']);
  }

}
