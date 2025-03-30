import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angulard';
}
