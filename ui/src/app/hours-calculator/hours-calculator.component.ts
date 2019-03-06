import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hours-calculator',
  templateUrl: './hours-calculator.component.html',
  styleUrls: ['./hours-calculator.component.scss']
})
export class HoursCalculatorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      startTime: this.formBuilder.control('', [Validators.required, (control: FormControl) => {
        const value = control.value;

        if (!value) {
          return null;
        }

        if (value.hour < 17 && value.hour > 3) {
          return { 'invalidTime': true };
        }

        return null;
      }]),
      endTime: this.formBuilder.control('', [Validators.required]),
      family: this.formBuilder.control('', [Validators.required])
    });
  }

  submit() {}

}
