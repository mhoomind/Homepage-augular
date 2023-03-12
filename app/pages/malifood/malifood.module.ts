import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MalifoodRoutingModule } from './malifood-routing.module';
import { Malifood } from './malifood';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MalifoodRoutingModule
  ],
  declarations: [Malifood]
})
export class MalifoodModule {}
