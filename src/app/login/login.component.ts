import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

role:string;
 
  user: User={
    "userId": null, "lastName": "", "userEmail": "", "userPassword": "", "userAddress": "", "userPhone": null,
    "firstName": "","userRole":""
  };

  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  checkLogin() {
    if(this.loginservice.authenticate(this.user.userEmail, this.user.userPassword)){ 
    //   this.loginservice.getRole(this.user.userRole).subscribe((data: User)=> {
    //     this.user = data;
    //   this.redirect();
    // });
    //   this.router.navigate(["/flights"]);
    // }
    // else {
    //   console.log("Invalid Login Credentials..");
    //   this.invalidLogin = true;
    // }
  
    
   
    if(this.user.userRole === 'CUSTOMER' || this.user.userRole == 'customer') {
      sessionStorage.setItem('role', 'customer');
      this.loginservice.role=this.role;
      if(this.loginservice.validatingRole()){
        sessionStorage.setItem('userId', String(this.user.userId));
        this.invalidLogin = false;
        this.router.navigate(["searchFlight"]);
      }
    
    }
    else if(this.user.userRole === 'ADMIN' || this.user.userRole == "admin") {
      sessionStorage.setItem('role', 'admin');
      if(this.loginservice.validatingRole()){
        sessionStorage.setItem('userId', String(this.user.userId));
        this.invalidLogin = false;
        this.router.navigate(["welcomeAdmin"]);
      }
     
    }
  }

}
}
