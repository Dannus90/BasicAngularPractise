import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  currentCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementer() {
    this.currentCount += 1;
  }

  decrementer() {
    this.currentCount -= 1;
  }

}
