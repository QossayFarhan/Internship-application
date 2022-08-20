import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentJobListPageRoutingModule } from './student-job-list-routing.module';

import { StudentJobListPage } from './student-job-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentJobListPageRoutingModule
  ],
  declarations: [StudentJobListPage]
})
export class StudentJobListPageModule {}
