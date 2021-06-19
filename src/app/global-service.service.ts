import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
declare var jQuery:any;

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  private subject  = new Subject<{userId: string, username: string}>();

  constructor(private router: Router) { }

  addUserToStorage(user: any) {
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('username', user.username);
    this.subject.next({userId: user.userId, username: user.username});
  }

  removeUserFromStorage() {
    localStorage.clear();
    this.subject.next();
  }

  isUserLoggedIn(): Observable<{userId: string, username: string}>{
    return this.subject.asObservable();
  }
}
