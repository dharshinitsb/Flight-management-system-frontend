import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../model/airport.component';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

 searchData = {"From":"","To":"","Date":""}



  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  search(){
    this.router.navigate(['scheduledFlight/showForPassenger'])
  }

}
