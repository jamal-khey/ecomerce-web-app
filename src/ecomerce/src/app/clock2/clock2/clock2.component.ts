import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/clock.service';

@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.scss']
})
export class Clock2Component implements OnInit {

  constructor(public clockService: ClockService) { }

  ngOnInit(): void {
  }

}
