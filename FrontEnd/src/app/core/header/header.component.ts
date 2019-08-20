import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// custom
import { LoginService } from '@app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    private router: Router) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  loginRequired() {
    if (this.loginService.loginRequired) {
      this.router.navigate(["login"]);
    }
    else {
      // go to account settings
    }
  }
}
