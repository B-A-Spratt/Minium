import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { OurStoryRoutingModule } from '@app/modules/our-story/our-story-routing.module';
import { OurStoryComponent } from '@app/modules/our-story/our-story/our-story.component';

@NgModule({
  declarations: [OurStoryComponent],
  imports: [
    CommonModule,
    OurStoryRoutingModule
  ]
})
export class OurStoryModule { }
