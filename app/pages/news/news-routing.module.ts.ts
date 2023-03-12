import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { News } from './news';

const routes: Routes = [
  {
    path: '',
    component: News
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModuleTs {}
