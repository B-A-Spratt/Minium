import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { OurStoryComponent } from '@app/modules/our-story/our-story/our-story.component';

const routes: Routes = [
  { path: '', component: OurStoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurStoryRoutingModule { }
