import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { userDTO } from '../../src/app/interfaces/userDTO';
import { DisplayDataComponent } from './Components/display-data/display-data.component';
import { LoginComponent } from './Components/login/login.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserFormPrimeflexComponent } from './Components/user-form-primeflex/user-form-primeflex.component';
import { UserFormComponent } from './Components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PrincipalComponent,
    UserFormComponent,
    CommonModule,
    UserFormPrimeflexComponent,
    DisplayDataComponent,
    RegisterComponent,
    LoginComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {

  }

  title = 'Angulard';

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
