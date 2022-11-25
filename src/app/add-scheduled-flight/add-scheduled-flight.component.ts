import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../model/scheduled-flight';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Schedule } from '../model/schedule';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  //schedule
  scheduleId:number;
  srcAirport:string;
  dstnAirport:string;
  deptDateTime:string;
  arrDateTime:string;
  airportCode:string;
  airportName:string;
  airportLocation:string;
  careerName:string;
  flightModel:string;
  seatCapacity:string;
flightId:String;
   
  scheduleFlight:ScheduledFlight={scheduleFlightId:null, availableSeats:null, flight:null,schedule:null,airport:null};

  constructor(private scheduleFlightService: ScheduledFlightService,private service:AuthenticationService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  addScheduleFlight(scheduleFlight,sid,ac,al,an,sa,da,ddt,adt,cn,fm,sc,fi){
   // alert(sa+da+ ddt+ adt);
   this.scheduleId=sid;
this.careerName=cn;
this.flightModel=fm;
this.seatCapacity=sc;
this.flightId=fi;
    this.srcAirport=sa;
    this.dstnAirport=da;
    this.airportCode=ac;
    this.airportLocation=al;
    this.airportName=an;
    this.deptDateTime=ddt;
    this.arrDateTime=adt;
    this.scheduleFlightService.addScheduleFlight( scheduleFlight,sid,ac,al,an,sa,da,ddt,adt,cn,fm,sc,fi).subscribe();
    console.log("Scheduled Flight added");
  }

  idValid:boolean=false;
    validateId(){
        if(this.scheduleFlight.scheduleFlightId>9999999){
            this.idValid=true;
        }
        else if(this.scheduleFlight.scheduleFlightId<1){
            this.idValid=true;
        }else{
            this.idValid=false;
        }
    }

  airportValid:boolean=false;
    validateAirports(a:string, b:string){
        if(a.toLowerCase()===b.toLowerCase()){
            this.airportValid=true;
        }else{
            this.airportValid=false;
        }
        this.enableButton();
  }

  buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.idValid&&!this.airportValid;
    }

    add(){

      if(this.service.hasRoleAdmin())
      
      this.router.navigate(['/scheduledFlight/add']);

  }

  view(){

      this.router.navigate(['/scheduledFlight/show']);

  }

  search(){

      this.router.navigate(['/scheduledFlight/search']);

  }
}
