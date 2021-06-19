import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isUserPresent: any;

  constructor(public router: Router, private gs: GlobalServiceService) { }

  canActivate(): boolean {
    this.gs.isUserLoggedIn().subscribe(user => {
      if(user){
        this.isUserPresent = true;
      }
      this.isUserPresent = false;
    });

    if((localStorage.getItem('userId') && localStorage.getItem('username'))){
      this.isUserPresent = true;
    } else {
      this.isUserPresent = false;
    }
    
    if(this.isUserPresent === true){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
