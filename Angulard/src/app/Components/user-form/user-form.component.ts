import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-form',
  imports: [
    CommonModule,
    EventEmitter,
    Output,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  nombre: string = "";
  edad: number | null = null;
  @Output() userSumbit = new EventEmitter<{ nombre: string; edad: number }>();
  subirForm() {
    if (this.nombre && this.edad !== null) {
      this.userSumbit.emit({nombre: this.nombre, edad: this.edad});
      this.nombre = "";
      this.edad = null;
    }
  }
}
