import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { SharedModule } from './shared/shared.module';
import { LoggedInUserComponent } from './logged-in-user/logged-in-user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthService } from './shared/services/auth.service';
import { SignInCallbackComponent } from './sign-in-callback/sign-in-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback/signout-redirect-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggedInUserComponent,
    LandingPageComponent,
    SignInCallbackComponent,
    SignoutRedirectCallbackComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
