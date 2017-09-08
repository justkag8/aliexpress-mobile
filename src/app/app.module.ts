import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddOpinionComponent } from './opinions/add-opinion/add-opinion.component';
import { ViewOpinionComponent } from './opinions/view-opinion/view-opinion.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

import {OpinionService} from "./opinions/opinion.service";

import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AlertComponent } from './_directives/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addOpinion', component: AddOpinionComponent, canActivate: [AuthGuard] },
  { path: 'viewOpinion', component: ViewOpinionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AddOpinionComponent,
    ViewOpinionComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // ,{ enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpModule
  ],
  providers: [
    OpinionService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
