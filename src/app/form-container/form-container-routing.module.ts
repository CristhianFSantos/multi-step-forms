import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './form-container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'step1',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FormContainerComponent,
    children: [
      {
        path: 'step1',
        loadChildren: () => import('./form-container-step1/form-container-step1.module').then((m) => m.FormContainerStep1Module),
      },
      {
        path: 'step2',
        loadChildren: () => import('./form-container-step2/form-container-step2.module').then((m) => m.FormContainerStep2Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormContainerRoutingModule {}
