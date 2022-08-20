import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentApplicationPageRoutingModule } from './student-application-routing.module';

import { StudentApplicationPage } from './student-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentApplicationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentApplicationPage]
})
export class StudentApplicationPageModule {}
