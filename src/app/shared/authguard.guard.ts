import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private service:AuthenticationService, private router:Router){}
  canActivate() {
    if(this.service.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
