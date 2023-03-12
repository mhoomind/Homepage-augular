import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MalicafeRoutingModule } from './malicafe-routing.module';
import { Malicafe } from './malicafe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MalicafeRoutingModule
  ],
  declarations: [Malicafe]
})
export class MalicafeModule {}
