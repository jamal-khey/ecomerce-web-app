import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor( public clockService : ClockService) { 
    this.count = 0;
  }

  ngOnInit(): void {
  }

  count: number;

  incrementCounter(){
    this.count++;
    
  }
}
