import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Maomali } from './maomali';

const routes: Routes = [
  {
    path: '',
    component: Maomali
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaomaliRoutingModule {}
