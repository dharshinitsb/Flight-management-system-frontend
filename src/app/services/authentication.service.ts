import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.component';

//Author: SANCHIT SINGHAL
//Description: Performs Authentication and user management operations
//Created On: 08/05/2020


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  data: any;

  constructor(private httpClient: HttpClient) { }

  role:string;
  
 
  //Retrieves user token and checks authentication
  authenticate(userEmail, userPassword) {

    return this.httpClient.post<any>('http://localhost:8081/authenticate',
    {userEmail, userPassword}).subscribe(
      userData => {
        sessionStorage.setItem('useremail', userEmail);
        let tokenStr = 'Bearer ' +userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    );
  }

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  // Removes user session(logout)
  logOut() {
    sessionStorage.removeItem('username');
  }

  // Retrives role of user(customer/admin)
  // getRole(userRole:String) {
  //   return this.httpClient.get('http://localhost:8080/user/getRole?userRole='+ userRole);
  // }

  // Adds a new User
  signUp(user: User) {
    return this.httpClient.post('http://localhost:8081/register', user);
  }
  validatingRole(){
    console.log(this.role);
    return this.role==this.role;
  }
  hasRoleCustomer(){
    return this.role=="customer";
  }
  hasRoleAdmin(){
    return this.role=="admin";
  }


}
