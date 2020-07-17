import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  
  bubble = new Audio('../sounds/bubbles.mp3');

  constructor() {  
   }

   playKick() {
        this.bubble.play();
  }
 

  ngOnInit() {
  }

}
