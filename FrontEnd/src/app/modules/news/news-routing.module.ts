import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { NewsComponent } from '@app/modules/news/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
