import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  mi_nombre: String = 'Saulo Ixcoy';
  constructor(){}
  print_txt(): String{
    return 'Proyecto de Aplicaciones web';
  }

  reNombrar(): void{
    this.mi_nombre = "Vladimir"
  }
}
