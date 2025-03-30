import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UserFormComponent } from './Components/user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalComponent, UserFormComponent, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angulard';
}
