import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

// custom
import { HeaderComponent } from '@app/core/header/header.component';
import { FooterComponent } from '@app/core/footer/footer.component';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { LoginService } from '@app/shared/services/login.service';
import { HttpClientModule } from '@angular/common/http';

const MaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModules,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
