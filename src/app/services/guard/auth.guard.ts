import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return this.usersService.collection(token).pipe(
        map((data) => {
          console.log(data, 'depuis guard');
          this.usersService.setUserData(data);

          return true;
        }),
        catchError((error) => {
          console.error(error, 'erreur dans ligne 34');
          this.router.navigate(['/signup']); // Rediriger vers la page d'accueil en cas d'erreur de service
          return of(false);
        })
      );
    } else {
      this.router.navigate(['/signup']); // Rediriger vers la page d'accueil si aucun token n'est présent
      return false;
    }
  }
}
