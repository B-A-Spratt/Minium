import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { TheTeamRoutingModule } from '@app/modules/the-team/the-team-routing.module';
import { TheTeamComponent } from '@app/modules/the-team/the-team/the-team.component';

@NgModule({
  declarations: [TheTeamComponent],
  imports: [
    CommonModule,
    TheTeamRoutingModule
  ]
})
export class TheTeamModule { }
