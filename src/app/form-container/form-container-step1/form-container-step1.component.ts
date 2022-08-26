import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContainerComponent } from './../form-container.component';

@Component({
  selector: 'msf-form-container-step1',
  templateUrl: './form-container-step1.component.html',
  styleUrls: ['./form-container-step1.component.scss'],
})
export class FormContainerStep1Component implements OnInit {
  form: FormGroup;

  constructor(private formContainer: FormContainerComponent, private readonly router: Router) {}

  ngOnInit(): void {
    this.form = this.formContainer.getStep1Form();
  }

  navigate() {
    if (this.form.invalid) return;
    this.router.navigate(['/form/step2']);
  }
}
