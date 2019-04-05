import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HospitalDescriptionComponent } from './components/hospital-description/hospital-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalDetailsComponent,
    SidemenuComponent,
    HospitalDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
