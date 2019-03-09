import { Component, OnInit } from '@angular/core';

import { CountDownService } from '../count-down.service';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  countDown: number;

  constructor(
    private countDownService: CountDownService,
    private pusherService: PusherService
  ) { }

  ngOnInit() {
    this.countDownService.getUserCount()
      .subscribe(data => {
        this.countDown = data.targetCount - data.userCount
      });
    
    this.pusherService.subScribeToChannel('count-down', ['newSub'], (data) => {
      // console.log(data)
      this.countDown -= 1;
    });
  }

}
