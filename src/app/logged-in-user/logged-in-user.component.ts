import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'oidc-client';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-logged-in-user',
  templateUrl: './logged-in-user.component.html',
  styleUrls: ['./logged-in-user.component.scss']
})
export class LoggedInUserComponent implements OnInit,AfterViewInit {
  user: User;
  constructor(private _authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    


    this._authService.isAuthenticated().then(data => {
      console.log("is authenticated => ", data);
    })

    this.route.queryParams.subscribe(data => {
      console.log('route data => ', data);
    })
  }

  logout() {
    this._authService.logout();
  }

  ngAfterViewInit() {
    this._authService._userManager.getUser()
      .then(user => {
        this.user = user;
        /* if(this._user !== user){
          this._loginChangedSubject.next(this.checkUser(user));
        } */

        //console.log("logged in user => ", user)

      }).catch(err => {
        console.log('error => ', err)
      })
  }



}
