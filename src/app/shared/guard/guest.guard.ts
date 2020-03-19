import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class GuestGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
    private snackBar: MatSnackBar
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/todos']);
      this.snackBar.open('No posees permisos para ingresar en esta seccion', 'Cerrar', {
        duration: 2000,
      });
    }
    return true;
  }

}