import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Recargas, Users } from '../../interfaces/recargas.interface'
import { RecargasService } from '../../services/recargas.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recargasService: RecargasService
  ) {}

  vendedor: string = "";
  users$!: Observable<Users>;

  ngOnInit(): void {
    this.buildForm();
    // this.recargasService.getUser$().subscribe((rta: Users) => {
    //   console.log("rta ", rta);
    //   this.vendedor = rta.nombre;
    // });
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      operador: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  onSubmit() {
    this.recargasService.agregarRecarga(this.formGroup.value);
    this.formGroup.reset();
  }

}
