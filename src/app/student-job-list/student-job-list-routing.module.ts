import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentJobListPage } from './student-job-list.page';

const routes: Routes = [
  {
    path: '',
    component: StudentJobListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentJobListPageRoutingModule {}
