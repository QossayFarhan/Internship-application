import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },

  {
    path: 'job-list',
    loadChildren: () => import('./jobList/jobList.module').then( m => m.JobListPageModule)
  },
  {
    path: 'add-job',
    loadChildren: () => import('./add-job/add-job.module').then( m => m.AddJobPageModule)
  },
  {
    path: 'edit-job/:id',
    loadChildren: () => import('./edit-job/edit-job.module').then( m => m.EditJobPageModule)
  },
  {
    path: 'register-company',
    loadChildren: () => import('./register-company/register-company.module').then( m => m.RegisterCompanyPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./applications/applications.module').then( m => m.ApplicationsPageModule)
  },
  {
    path: 'student-application/:id',
    loadChildren: () => import('./student-application/student-application.module').then( m => m.StudentApplicationPageModule)
  },
  {
    path: 'student-job-list',
    loadChildren: () => import('./student-job-list/student-job-list.module').then( m => m.StudentJobListPageModule)
  },
  {
    path: 'validate-application',
    loadChildren: () => import('./validate-application/validate-application.module').then( m => m.ValidateApplicationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
