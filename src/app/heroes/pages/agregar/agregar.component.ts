import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Recargas } from '../../interfaces/recargas.interface'
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
  ) { }

  ngOnInit(): void {
    this.buildForm();
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

  get name(){
    return this.formGroup.get('name');
  }

  get correo(){
    return this.formGroup.get('correo');
  }

  get telefono(){
    return this.formGroup.get('telefono');
  }

  get operador(){
    return this.formGroup.get('operador');
  }

  get valor(){
    return this.formGroup.get('valor');
  }

  onSubmit() {
    this.recargasService.agregarRecarga(this.formGroup.value);
    console.log(this.formGroup.value);
    //this.formGroup.reset();
  }

}
