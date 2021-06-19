import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalServiceService } from 'src/app/global-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userId: any;
  username: any;
  changeText: boolean;
  subscription: Subscription = new Subscription;

  constructor(private gs: GlobalServiceService) {
    this.subscription = this.gs.isUserLoggedIn().subscribe(user => {
      if(user){
        if(user.userId && user.username){
          this.username = user.username;
          this.userId = user.userId;
        }
      }
    });
    this.userId = localStorage.getItem('userId');
    this.username = localStorage.getItem('username');
    this.changeText = false;
  }

  ngOnInit(): void {
    
  }

  onLogout() {
    this.gs.removeUserFromStorage();
    this.userId = "";
    this.username = "";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
