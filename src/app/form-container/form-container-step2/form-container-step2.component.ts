import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContainerComponent } from './../form-container.component';

@Component({
  selector: 'msf-form-container-step2',
  templateUrl: './form-container-step2.component.html',
  styleUrls: ['./form-container-step2.component.scss'],
})
export class FormContainerStep2Component implements OnInit {
  form: FormGroup;

  constructor(private formContainer: FormContainerComponent, private readonly router: Router) {}

  ngOnInit(): void {
    this.form = this.formContainer.getStep2Form();
  }

  submit(): void {
    alert('Nice Work!!✅');
    this.formContainer.clearForm();
    this.router.navigate(['']);
  }
}
