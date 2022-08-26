import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerStep2RoutingModule } from './form-container-step2-routing.module';
import { FormContainerStep2Component } from './form-container-step2.component';


@NgModule({
  declarations: [
    FormContainerStep2Component
  ],
  imports: [
    CommonModule,
    FormContainerStep2RoutingModule
  ]
})
export class FormContainerStep2Module { }
