import { Recargas } from '../../interfaces/recargas.interface';
import { RecargasService } from '../../services/recargas.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persist } from '../../interfaces/persist.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private recargasService: RecargasService) {
   }
  recargas: Recargas[] = [];
  recargas$!: Observable<Recargas[]>;
  data: Persist[] = [];
  selected: string = "operador";

  ngOnInit(): void {
    this.recargas$ = this.recargasService.getRecargas$();
    this.recargas$.subscribe((recargas: Recargas[]) =>{
      this.recargas = recargas;
    });
  }

  filterArray(recargas: Recargas[], campo: string): void {
    let el : any;
    let index: number;
    for(el of recargas) {
      index = this.data.findIndex((element: any) => element.name == el[campo]);
      if(this.data && index >= 0) {
        this.data[index].count ++;
        this.data[index].mount = this.data[index].mount + parseInt(el.valor);
      } else {
        this.data.push({
          count: 1,
          mount: parseInt(el.valor),
          name: el[campo]
        });
      }
    }
  }

  setSelected(name: string): void {
    this.data = [];
    this.selected = name;
    this.filterArray(this.recargas, this.selected);
    console.log("data", this.data);
  }
}
