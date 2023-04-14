import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Recargas, Users } from '../interfaces/recargas.interface';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {
  recargas: Recargas[] = [];
  users!: Users;
  private recargas$ = new BehaviorSubject<Recargas[]>([]);
  private users$ = new BehaviorSubject<Users>(this.users);

  constructor() { 
  }

  agregarRecarga(recarga: Recargas) {
    this.recargas.push({...recarga, vendedor: "Camilo"});
    this.recargas$.next(this.recargas);
  }

  getRecargas$(): Observable<Recargas[]> {
    return this.recargas$.asObservable();
  }

  agregarUser(user: Users) {
    this.users = user;
    this.users$.next(this.users);
  }

  getUser$(): Observable<Users> {
    return this.users$.asObservable();
  }
}
