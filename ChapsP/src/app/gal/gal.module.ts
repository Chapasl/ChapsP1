import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalPageRoutingModule } from './gal-routing.module';

import { GalPage } from './gal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalPageRoutingModule
  ],
  declarations: [GalPage]
})
export class GalPageModule {}
