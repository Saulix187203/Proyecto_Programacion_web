import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userDTO } from '../../interfaces/userDTO';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-registro',
  imports: [RegisterComponent, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router: Router) { }
  usuario: userDTO = {
    nombre: '',
    apellido: '',
    edad: 0,
    correo: '',
    contra: '',
    contra2: ''
  };

  onUserSumbit(userData: userDTO) {
    this.usuario = userData;
    console.log(this.usuario);
    this.router.navigate(["/login"]).then(exito =>{
      if (exito) {
        console.log("navegacion exitosa")
      } else {
        console.log("navegacion con fallo")
      }
    });
  }
}
