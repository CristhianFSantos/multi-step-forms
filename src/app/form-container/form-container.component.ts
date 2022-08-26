import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'msf-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  constructor() {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      step1: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        bithDate: new FormControl(null, Validators.required),
      }),
      step2: new FormGroup({
        address: new FormControl(null),
        country: new FormControl(null),
      }),
    });
  }

  getStep1Form(): FormGroup {
    return this.form.get('step1') as FormGroup;
  }

  getStep2Form(): FormGroup {
    return this.form.get('step2') as FormGroup;
  }

  clearForm(): void {
    this.form.reset();
  }
}
