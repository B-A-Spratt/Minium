import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

// custom
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';
import { SingletonRootModule } from './shared/singleton-root.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    // custom
    AppRoutingModule,
    CoreModule,
    SingletonRootModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
