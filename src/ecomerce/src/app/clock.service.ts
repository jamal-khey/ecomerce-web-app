import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  tick: number = 0;
  constructor() { 
    setInterval(() => { this.tick++;
      console.log("tick"+this.tick.toString());
     }, 1000);
    
  }

  getTick(): number{
    return this.tick;
  }
}
