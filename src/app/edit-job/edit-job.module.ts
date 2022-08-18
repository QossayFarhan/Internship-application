import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditJobPageRoutingModule } from './edit-job-routing.module';

import { EditJobPage } from './edit-job.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditJobPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditJobPage]
})
export class EditJobPageModule {}
