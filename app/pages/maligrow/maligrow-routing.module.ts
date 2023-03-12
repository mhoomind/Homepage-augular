import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Maligrow } from './maligrow';

const routes: Routes = [
  {
    path: '',
    component: Maligrow
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaligrowRoutingModule {}
