import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayDataComponent } from './Components/display-data/display-data.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UserFormPrimeflexComponent } from './Components/user-form-primeflex/user-form-primeflex.component';
import { UserFormComponent } from './Components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalComponent, UserFormComponent, CommonModule, UserFormPrimeflexComponent, DisplayDataComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angulard';

  nombre: string = '';
  edad: number | null = null;

  onUserSumbit(userData:{name: string; age:number}){
    this.nombre = userData.name;
    this.edad = userData.age;
  }
}
