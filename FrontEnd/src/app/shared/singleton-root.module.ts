import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { HttpErrorInterceptorService } from './services/http-error-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SingletonRootModule {

  constructor(@Optional() @SkipSelf() parentModule: SingletonRootModule) {
    if (parentModule) {
      throw new Error(
        'SingletonRootModule is already loaded. Import it in the AppModule only.'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SingletonRootModule,
      providers: [
        LoginService,
        HttpErrorInterceptorService
      ]
    };
  }
}
