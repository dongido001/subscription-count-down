import { Component, OnInit } from '@angular/core';

import { CountDownService, userData } from '../count-down.service';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: userData = {
    name: '',
    email: ''
  };

  userAdded: Boolean = false

  constructor(
    private countDownService: CountDownService, 
    private pusherService: PusherService
  ) { }

  ngOnInit() {}

  addUser(): void {
    this.countDownService.addNewUser(this.userData)
      .subscribe( data => {
        this.userAdded = true 
        this.userData = {name:'', email:''}
        console.log(data)
      })
    
    this.pusherService.triggerEvent('count-down', 'newSub', this.userData)
        .subscribe( data => {
          console.log(data)
        })
  }

}
