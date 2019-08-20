import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom
import { CareersRoutingModule } from '@app/modules/careers/careers-routing.module';
import { CareersComponent } from '@app/modules/careers/careers/careers.component';
import { CareerComponent } from '@app/modules/careers/careers/career/career.component';
import { CareerListComponent } from '@app/modules/careers/careers/career-list/career-list.component';
import { CareerService } from '@app/shared/services/career.service';

@NgModule({
  declarations: [
    CareersComponent,
    CareerComponent,
    CareerListComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    // custom
    CareersRoutingModule
  ],
  providers: [CareerService]
})
export class CareersModule { }
