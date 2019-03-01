import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hours-calculator',
  templateUrl: './hours-calculator.component.html',
  styleUrls: ['./hours-calculator.component.scss']
})
export class HoursCalculatorComponent implements OnInit {

  constructor() { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      startTime: new FormControl(),
      endTime: new FormControl()
    });
  }

}
