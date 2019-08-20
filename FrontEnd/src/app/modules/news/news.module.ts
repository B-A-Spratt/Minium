import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { NewsRoutingModule } from '@app/modules/news/news-routing.module';
import { NewsComponent } from '@app/modules/news/news/news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
