import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contact } from './contact';

const routes: Routes = [
  {
    path: '',
    component: Contact
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModuleTs {}
