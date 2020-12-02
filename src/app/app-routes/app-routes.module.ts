import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoggedInUserComponent } from '../logged-in-user/logged-in-user.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SignInCallbackComponent } from '../sign-in-callback/sign-in-callback.component';
import {AuthGuard} from './../shared/guards/auth.guard';
import { SignoutRedirectCallbackComponent } from '../signout-redirect-callback/signout-redirect-callback.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'signin-oidc',
        component: SignInCallbackComponent
      },
      {
        path: 'signout-callback-oidc',
        component: SignoutRedirectCallbackComponent
      },
      {
        path: 'signin-oidc',
        component: SignInCallbackComponent
      },
      {
        path: 'home',
        component: LoggedInUserComponent,
        canActivate: [AuthGuard]
      },
    ]
  },

  /* {
    path: 'system-support',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/system-support/system-support.module').then(
            (m) => m.SystemSupportModule
          )
      }
    ]
  } */
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
