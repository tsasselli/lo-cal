import { LocalComponent } from './local/local.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';

const appRoutes: Routes = [
  {
    path: 'local',
    component: LocalComponent,
    data: { title: 'Local' }
  },
  {
    path: 'business',
    component: BusinessComponent,
    data: { title: 'Business' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: '',
    redirectTo: '/local',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BusinessComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- for debugging
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
