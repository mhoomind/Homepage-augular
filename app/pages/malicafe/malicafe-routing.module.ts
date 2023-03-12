import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Malicafe } from './malicafe';

const routes: Routes = [
  {
    path: '',
    component: Malicafe
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalicafeRoutingModule {}
