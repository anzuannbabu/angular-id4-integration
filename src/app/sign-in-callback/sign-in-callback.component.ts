import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in-callback',
  templateUrl: './sign-in-callback.component.html',
  styleUrls: ['./sign-in-callback.component.scss']
})
export class SignInCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }
  ngOnInit(): void {
    this._authService.finishLogin()
    .then(_ => {
      //call the endpoint of the user authorization details, including roles, permissions and picture
      this._router.navigate(['/home'], { replaceUrl: true });
    })
  }

}
