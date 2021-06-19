import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNotPresent: boolean = false;

  model: any = {};

  usersDB = [ 
    {userId : 'abc@media.com', password: 'abc123', username: 'tom'}, 
    {userId : 'def@media.com', password: 'def123', username: 'dick'}

  ]

  constructor(private gs: GlobalServiceService) { }

  ngOnInit(): void {
    
  }

  onSubmit(data:any){

    let loggedUser = this.usersDB.filter(function (user) { return user.userId === data.email && user.password === data.password; });

    if(loggedUser.length > 0){
      this.gs.addUserToStorage(loggedUser[0]);
      // alert('Login Successfull! \n\n' + JSON.stringify(this.model));
      document.getElementById('closeLoginModel')?.click();
    } else {
      this.userNotPresent = true;
    }
  }

}
