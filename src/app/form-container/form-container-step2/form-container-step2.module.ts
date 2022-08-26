import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormContainerStep2RoutingModule } from './form-container-step2-routing.module';
import { FormContainerStep2Component } from './form-container-step2.component';

@NgModule({
  declarations: [FormContainerStep2Component],
  imports: [CommonModule, FormContainerStep2RoutingModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
})
export class FormContainerStep2Module {}
