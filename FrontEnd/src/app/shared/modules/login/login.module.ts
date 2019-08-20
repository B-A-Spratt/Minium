import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom
import { LoginService } from '@app/shared/services/login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: []
})
export class LoginModule {
  constructor(@Optional() @SkipSelf() parentModule: LoginModule) {
    if (parentModule) {
      throw new Error(
        'LoginModule is already loaded. Import it in the AppModule only.'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [LoginService]
    };
  }
}
