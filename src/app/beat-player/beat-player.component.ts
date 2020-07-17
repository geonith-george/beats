import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-beat-player',
  templateUrl: './beat-player.component.html',
  styleUrls: ['./beat-player.component.css']
})
export class BeatPlayerComponent implements OnInit {


  snare: number[] = [1,0,1,0];
  clap: number[] =  [1,0,1,1];
  kick: number[] =  [1,0,0,0];
  hitat: number[] = [1,1,0,1];
  speed = 150;
  loop:boolean = false;

  constructor() { 

  }

  activeSnare(index: number){
    console.log('snare index',this.snare[index]);
    if(this.snare[index]==1){
      this.snare[index]=0;
    }
    else {
      this.snare[index]= 1;
    }
  }
  activeClap(index: number){
    console.log('snare index',this.clap[index]);
    if(this.clap[index]==1){
      this.clap[index]=0;
    }
    else {
      this.clap[index]= 1;
    }
  }
  activeKick(index: number){
    console.log('snare index',this.kick[index]);
    if(this.kick[index]==1){
      this.kick[index]=0;
    }
    else {
      this.kick[index]= 1;
    }
  }
  activeHihat(index: number){
    console.log('snare index',this.hitat[index]);
    if(this.hitat[index]==1){
      this.hitat[index]=0;
    }
    else {
      this.hitat[index]= 1;
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

stop(){
  throw new Error("Something went badly wrong!");
}

  playCurrent:boolean
  async play()
  {
    if(this.playCurrent == true && this.loop == false){
      throw new Error("Something went badly wrong!");
      this.playCurrent=false;
    }
    
    

   this.playCurrent = true;
   let speed2 = (<HTMLInputElement>document.getElementById('speed')).value; 
   this.speed = Number(speed2);
   let s = (<HTMLMediaElement>document.getElementById('snare'));
   let c = (<HTMLMediaElement>document.getElementById('clap'));
   let k = (<HTMLMediaElement>document.getElementById('kick'));
   let h = (<HTMLMediaElement>document.getElementById('hihat'));
   

   for(let i=0;i<4;i++){
     await this.delay(this.speed);
      if (this.snare[i] ==1){
        s.currentTime=0;
        s.play();
      }
      if (this.clap[i] ==1){
        c.currentTime=0;
        c.play();
      }
      if (this.kick[i] ==1){
        k.currentTime=0;
        k.play();
      }
      if (this.hitat[i] ==1){
        h.currentTime=0;
        h.play();
      }    
    }
    
    if (this.loop == true){
      this.play();
    }

    this.playCurrent = false;
  }
  
  validator(){
    if (this.loop == true){
      this.loop = false;
    }
    else{
      this.loop = true;

    }
  }
  ngOnInit() {
  }

}
