import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerStep1RoutingModule } from './form-container-step1-routing.module';
import { FormContainerStep1Component } from './form-container-step1.component';

@NgModule({
  declarations: [FormContainerStep1Component],
  imports: [CommonModule, FormContainerStep1RoutingModule, ReactiveFormsModule],
})
export class FormContainerStep1Module {}
