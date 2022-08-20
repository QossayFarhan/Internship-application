import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateApplicationPageRoutingModule } from './validate-application-routing.module';

import { ValidateApplicationPage } from './validate-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateApplicationPageRoutingModule
  ],
  declarations: [ValidateApplicationPage]
})
export class ValidateApplicationPageModule {}
