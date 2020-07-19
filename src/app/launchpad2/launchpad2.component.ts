import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad2',
  templateUrl: './launchpad2.component.html',
  styleUrls: ['./launchpad2.component.css']
})
export class Launchpad2Component implements OnInit {

  constructor() { }

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
