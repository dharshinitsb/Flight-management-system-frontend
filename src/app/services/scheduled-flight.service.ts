import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduledFlight } from '../model/scheduled-flight';

@Injectable({
  providedIn: 'root'
})

export class ScheduledFlightService {
  private SFurl: string;
  constructor(private http: HttpClient) { 
  }

  addScheduleFlight(scheduleFlight:ScheduledFlight,scheduleId,srcAirport,dstnAirport,airportCode,airportName,airportLocation,deptDateTime,arrDateTime,flightId,flightModel,careerName,seatCapacity){
    let form=new FormData();
    form.append("scheduleFlightId", String(scheduleFlight.scheduleFlightId))
    form.append("availableSeats",String(scheduleFlight.availableSeats))
    form.append("flight",String(scheduleFlight.flight))
    form.append("schedule",String(scheduleFlight.schedule))
    form.append("airport",String(scheduleFlight.schedule));
    let params = new HttpParams()
    //schedule
    .set('scheduleId', scheduleId)
    .set('arrDateTime', arrDateTime)
    .set('deptDateTime', deptDateTime)
    //airport
    .set('srcAirport', srcAirport)
    .set('dstnAirport', dstnAirport)
    .set('airportCode',airportCode)
    .set('airportName',airportName)
    .set('airportLocation',airportLocation)
    //flight
    .set('flightId', flightId)
    .set('flightModel', flightModel)
    .set('careerName', careerName)
    .set('seatCapacity', seatCapacity);
   
    console.log(scheduleFlight);
    console.log(params.toString());
   // console.log(form);
    return this.http.post('http://localhost:8080/scheduledFlight/add?',form,{params});
  }

  searchScheduledFlight(scheduledFlightId: number) {
    return this.http.get('http://localhost:8080/scheduledFlight/search/${id}'+scheduledFlightId);
  }

  showScheduleFlights(): Observable<any> {
    return this.http.get('http://localhost:8080/scheduledFlight/viewAll');
  }

  removeScheduleFlight(scheduleFlightId:number){
    return this.http.delete('http://localhost:8080/scheduledFlight/delete/${id}'+scheduleFlightId);
 }

 modifyScheduledFlight(scheduleFlight:ScheduledFlight){
   let mForm= new FormData();
   mForm.append("scheduleFlightId",String(scheduleFlight.scheduleFlightId))
   mForm.append("schedule",String(scheduleFlight.schedule))
   mForm.append("flight",String(scheduleFlight.flight))
   mForm.append("availableSeats",String(scheduleFlight.availableSeats))
   return this.http.put('http://localhost:8080/scheduledFlight/modify?',mForm);
 }

}
