import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { userDTO } from '../../interfaces/userDTO';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
userOBJ: userDTO = {
    nombre: '',
    apellido: '',
    edad: 0,
    correo: '',
    contra: '',
    contra2: ''
  };

  @Output() userSumbit = new EventEmitter<userDTO>();
    subirForm() {
      const { nombre, apellido, edad } = this.userOBJ;
  
      if (this.userOBJ.nombre && this.userOBJ.apellido && this.userOBJ.edad !== null) {
        this.userSumbit.emit({
          nombre: nombre,
          apellido: apellido,
          edad: edad
        });
        this.userOBJ.nombre = '';
        this.userOBJ.apellido = '';
        this.userOBJ.edad = null;
      }
    }
}
