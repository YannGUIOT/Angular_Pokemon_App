import { Injectable } from '@angular/core';
import { Observable, of, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu'); 
    return of(isLoggedIn).pipe(
      delay(1000),                  // simulation d'un temps de chargement
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn) // mise à jour de isLoggedIn
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
