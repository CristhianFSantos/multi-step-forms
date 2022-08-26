import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormStorageModule } from './../form-storage/form-storage.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerRoutingModule } from './form-container-routing.module';
import { FormContainerComponent } from './form-container.component';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [CommonModule, FormContainerRoutingModule, ReactiveFormsModule, FormStorageModule],
})
export class FormContainerModule {}
