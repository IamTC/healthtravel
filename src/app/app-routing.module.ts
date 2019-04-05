import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DummyPageComponent } from './components/dummy-page/dummy-page.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalDetailsComponent
  },
  {
    path: 'procedures',
    component: DummyPageComponent
  },
  {
    path: 'doctors',
    component: DummyPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
