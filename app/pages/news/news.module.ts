import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsRoutingModuleTs } from './news-routing.module.ts'
import { News } from './news';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewsRoutingModuleTs
  ],
  declarations: [News]
})
export class NewsModule {}
