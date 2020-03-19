import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { GuestGuard } from '../../shared/guard/guest.guard';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
  },
  {
    path: '',
    canActivate: [GuestGuard],
    component: AuthenticationComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
