import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selRole!:string;
  user: User={
    "userId": 0, "lastName": "", "userEmail": "", "userPassword": "", "userAddress": "", "userPhone": null,
    "firstName": '',"userRole":""
  };

  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(private router: Router, private loginservice: AuthenticationService) { }


  ngOnInit() {
  
  }

  // Adds a new User
  signUp() {
    console.log(this.user);
    this.loginservice.role = this.selRole;
    this.loginservice.signUp(this.user).subscribe();
    this.router.navigate(["login"]);
  }

  // UserName Validations
  nameFlag: boolean= false;
  validateFirstName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.firstName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }
  validateLastName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.lastName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }
  addressFlag: boolean= false;
  validateAddress() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.lastName);
    if(!flag) {
      this.addressFlag=true;
    }
    else {
      this.addressFlag=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.user.userPhone);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.userEmail);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }
    roleFlag:boolean=false;
    validateRole(){
       // var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.userRole);
       var flag = "";
        if(flag == "customer" || flag == "admin"){
            this.roleFlag=true;
        }else{
            this.roleFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag||this.emailFlag||this.phoneFlag;
    }
}
