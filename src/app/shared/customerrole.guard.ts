import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerroleGuard implements CanActivate {
  constructor(private service:AuthenticationService, private router:Router){}
  canActivate(){
    if(this.service.hasRoleCustomer()){
      return true;
    }
    else{
      

      return false;
    }
   
  }
  
}
