import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerRoutingModule } from './form-container-routing.module';
import { FormContainerComponent } from './form-container.component';


@NgModule({
  declarations: [
    FormContainerComponent
  ],
  imports: [
    CommonModule,
    FormContainerRoutingModule
  ]
})
export class FormContainerModule { }
