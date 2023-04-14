import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RecargasService } from '../../../recargas/services/recargas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  submit(){
    let users: any = this.formGroup.value;
    this.recargasService.agregarUser(users);
  }
}
