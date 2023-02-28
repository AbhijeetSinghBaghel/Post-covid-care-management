import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { DeceasedDetailsComponent } from './deceased-details/deceased-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DatabaseComponent } from './database/database.component';


const appRoute: Routes = [
  { path: '', component: RegistrationComponent},
  { path: 'Home', component: RegistrationComponent },
  { path: 'info', component: EducationComponent },
  { path: 'deceased', component: DeceasedDetailsComponent },
  { path: 'database', component: DatabaseComponent },
  { path: '**', component:  ErrorPageComponent }
  
]
@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    DeceasedDetailsComponent,
    RegistrationComponent,
    NavbarComponent,
    HeaderComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
