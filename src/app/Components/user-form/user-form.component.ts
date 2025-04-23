import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { userDTO } from '../../interfaces/userDTO';

@Component({
  selector: 'app-user-form',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Output() userSumbit = new EventEmitter<userDTO>();
  userOBJ: userDTO = {
    nombre: '',
    apellido: '',
    edad: 0,
    correo: '',
    contra: '',
    contra2: ''
  };

  
  subirForm() {
    const { nombre, apellido, edad, correo, contra, contra2 } = this.userOBJ;

    if (this.userOBJ.nombre && this.userOBJ.apellido && this.userOBJ.edad !== null) {
      this.userSumbit.emit(this.userOBJ);
    }
  }
}
