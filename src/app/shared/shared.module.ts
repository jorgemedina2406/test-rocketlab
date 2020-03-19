import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Services
import { AuthService } from './services/auth.service';

@NgModule({
  exports: [
    CommonModule
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
