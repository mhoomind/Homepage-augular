import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Malifood } from './malifood';

const routes: Routes = [
  {
    path: '',
    component: Malifood
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalifoodRoutingModule {}
