import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-form-primeflex',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './user-form-primeflex.component.html',
  styleUrl: './user-form-primeflex.component.css'
})
export class UserFormPrimeflexComponent {
  name: string = '';
  age: number | null = null;

  @Output() userSumbit = new EventEmitter<{ name: string; age: number }>();
  subirForm() {
    if (this.name && this.age !== null) {
      this.userSumbit.emit({ name: this.name, age: this.age });
      this.name = "";
      this.age = null;
    }
  }
}
