import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(public clockService: ClockService) { }

  ngOnInit(): void {
  }


}
