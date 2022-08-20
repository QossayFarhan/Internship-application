import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateApplicationPage } from './validate-application.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateApplicationPageRoutingModule {}
