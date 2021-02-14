import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { 
    this.count = 0;
  }

  ngOnInit(): void {
  }

  count: number;

  incrementCounter(){
    this.count++;
  }
}
