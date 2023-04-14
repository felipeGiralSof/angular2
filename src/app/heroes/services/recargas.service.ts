import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Recargas } from '../interfaces/recargas.interface';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {
  recargas: Recargas[] = [];
  private recargas$ = new BehaviorSubject<Recargas[]>([]);

  constructor() { 
  }

  agregarRecarga(recarga: Recargas) {
    this.recargas.push({...recarga, vendedor: "Wini"});
    this.recargas$.next(this.recargas);
    console.log("recargasServices = ", this.recargas[0]);
  }

  getRecargas$(): Observable<Recargas[]> {
    return this.recargas$.asObservable();
  }
}
