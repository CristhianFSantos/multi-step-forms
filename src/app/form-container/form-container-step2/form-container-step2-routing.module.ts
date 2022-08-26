import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerStep2Component } from './form-container-step2.component';

const routes: Routes = [{ path: '', component: FormContainerStep2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContainerStep2RoutingModule { }
