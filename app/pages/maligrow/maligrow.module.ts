import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaligrowRoutingModule } from './maligrow-routing.module';
import { Maligrow } from './maligrow';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaligrowRoutingModule
  ],
  declarations: [Maligrow]
})
export class MaligrowModule {}
