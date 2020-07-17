import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  
  constructor() {  
    
  }
  
  clicked(val:string){
    console.log("clicked");
    let v = (<HTMLMediaElement>document.getElementById(val));
    console.log(v,typeof(v));
    v.currentTime = 0;
    v.play();
  }


  ngOnInit() {

    
  }
}
