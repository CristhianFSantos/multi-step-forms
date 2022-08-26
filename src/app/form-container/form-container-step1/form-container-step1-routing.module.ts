import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerStep1Component } from './form-container-step1.component';

const routes: Routes = [{ path: '', component: FormContainerStep1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContainerStep1RoutingModule { }
