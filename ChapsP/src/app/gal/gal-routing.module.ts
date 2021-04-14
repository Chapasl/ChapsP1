import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalPage } from './gal.page';

const routes: Routes = [
  {
    path: '',
    component: GalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalPageRoutingModule {}
