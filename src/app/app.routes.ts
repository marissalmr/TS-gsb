import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
  {
    path: 'medecins',
    component: DoctorsPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'medecins'
  },
  {
    path: '**',
    redirectTo: 'medecins'
  }
];

