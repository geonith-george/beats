import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  
  constructor() {  
  }
  
  clicked(){
    console.log("clicked");
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "./sounds/bubbles.mp3";
    audio.load();
    audio.play();
  }

  ngOnInit() {

    
  }
}
