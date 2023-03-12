import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaomaliRoutingModule } from './maomali-routing.module';
import { Maomali } from './maomali';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaomaliRoutingModule
  ],
  declarations: [Maomali]
})
export class MaomaliModule {}
