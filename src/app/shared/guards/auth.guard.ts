import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /* let authenticated = false;
    this.authService.isAuthenticated().then(result => {
      authenticated = result;
      console.log('authenticateed => ', result);
    
      
    });

    console.log('authenticateed out => ', authenticated); */

    return this.authService.isAuthenticated().then(result => {
      if (result) {
        return true;
      } else {
        this.router.navigate(['/'])
        return false;
      }
    });
  }

  private isAuthenticated(): boolean {
    let isAuthenticated = false;

    this.authService.isAuthenticated().then(result => {
      isAuthenticated = result;
      console.log('authenticateed => ', result);
      /* if (!result) {
        this.router.navigate(['/']);
      } */
    });

    return isAuthenticated;
  }

}
