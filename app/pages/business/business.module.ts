import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusinessRoutingModule } from './business-routing.module';
import { Business } from './business';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BusinessRoutingModule
  ],
  declarations: [Business]
})
export class BusinessModule {}
