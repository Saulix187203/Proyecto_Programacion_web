import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-display-data',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {
  @Input() name: string = '';
  @Input() age: number | null = null;

}
