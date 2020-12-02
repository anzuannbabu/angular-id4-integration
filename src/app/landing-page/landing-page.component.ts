import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  title = 'LogBook';
  public userAuthenticated = false;

  constructor(private _authService: AuthService, private router: Router) {
    this._authService.loginChanged
      .subscribe(userAuthenticated => {
        console.log("authentication => ", userAuthenticated);

        this.userAuthenticated = userAuthenticated;
      })
  }

  ngOnInit(): void {
    this._authService.isAuthenticated()
      .then(userAuthenticated => {
        this.userAuthenticated = userAuthenticated;
        if (userAuthenticated) {
          //go to home page
          this.router.navigate(['/home']);
        }
      });


  }

  login() {
    this._authService.login();
  }

}
