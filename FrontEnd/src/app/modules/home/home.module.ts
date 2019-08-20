import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { HomeRoutingModule } from '@app/modules/home/home-routing.module';
import { HomeComponent } from '@app/modules/home/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
