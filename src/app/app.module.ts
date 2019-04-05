import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HospitalDescriptionComponent } from './components/hospital-description/hospital-description.component';
import { AccreditationComponent } from './components/accreditation/accreditation.component';
import { HospitalPhotosComponent } from './components/hospital-photos/hospital-photos.component';
import { HospitalRoomComponent } from './components/hospital-room/hospital-room.component';
import { HospitalMealComponent } from './components/hospital-meal/hospital-meal.component';
import { AppRoutingModule } from './app-routing.module';
import { DummyPageComponent } from './components/dummy-page/dummy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalDetailsComponent,
    SidemenuComponent,
    HospitalDescriptionComponent,
    AccreditationComponent,
    HospitalPhotosComponent,
    HospitalRoomComponent,
    HospitalMealComponent,
    DummyPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
