import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-list',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
