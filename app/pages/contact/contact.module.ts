import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModuleTs } from './contact-routing.module.ts'
import { Contact } from './contact';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModuleTs
  ],
  declarations: [Contact]
})
export class ContactModule {}
