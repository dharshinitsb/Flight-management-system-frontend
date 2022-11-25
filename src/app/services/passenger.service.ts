import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Passenger } from '../model/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
   
  private baseUrl='http://localhost:8080/passenger';
  constructor(private http: HttpClient) { }

  createPassenger(passenger: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/createPassenger`, passenger);
  }

  updatePassenger(user: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updatePassenger/`, user);
  }

  deletePassenger(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletePassenger/${id}`,{ responseType: 'text'});
  }


  getUserList(): Observable<any>{     return this.http.get(`${this.baseUrl}/readAllPassengers`);
  }

}