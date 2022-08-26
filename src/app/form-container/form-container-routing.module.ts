import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './form-container.component';

const routes: Routes = [
  { path: '', component: FormContainerComponent },
  { path: 'form', loadChildren: () => import('./form-container-step1/form-container-step1.module').then((m) => m.FormContainerStep1Module) },
  { path: 'form', loadChildren: () => import('./form-container-step2/form-container-step2.module').then((m) => m.FormContainerStep2Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormContainerRoutingModule {}
