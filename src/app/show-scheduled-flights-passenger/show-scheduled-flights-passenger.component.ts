import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ScheduledFlight } from '../model/scheduled-flight';
import { ScheduledFlightService } from '../services/scheduled-flight.service';

@Component({
  selector: 'app-show-scheduled-flights-passenger',
  templateUrl: './show-scheduled-flights-passenger.component.html',
  styleUrls: ['./show-scheduled-flights-passenger.component.css']
})
export class ShowScheduledFlightsPassengerComponent implements OnInit {

 
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  scheduleFlights: Observable<ScheduledFlight[]>;

  constructor(private router: Router, private service: ScheduledFlightService) { }

  ngOnInit(): void {
    this.service.showScheduleFlights().subscribe(
      (data:Observable<ScheduledFlight[]>)=>this.scheduleFlights=data
    );
  }
  addScheduleFlight(scheduleFlightId:number){
    this.service.removeScheduleFlight(scheduleFlightId).subscribe();

   
    this.router.navigate(['home'])
}

  removeScheduleFlight(scheduleFlightId:number){
    this.service.removeScheduleFlight(scheduleFlightId).subscribe();
  

    this.router.navigate(['home'])
}

bookTickets(){
  this.router.navigate(['passenger'])
}
  add(){

    this.router.navigate(['/scheduledFlight/add']);

  }

  view(){

    this.router.navigate(['/scheduledFlight/show']);

  }

  search(){

    this.router.navigate(['/scheduledFlight/search']);

  }

}
