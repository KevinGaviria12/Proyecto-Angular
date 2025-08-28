import { Component, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DecimalPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // interpolacion pasar logica a la vista 
  protected readonly ficha = signal(2994283);
  protected readonly programa = signal('ADSO');
  protected readonly nombres = signal('Kevin Burgos Gaviria');

  // Registro de tres notas individuales 
  protected readonly nota1 = signal<number>(0);
  protected readonly nota2 = signal<number>(0);
  protected readonly nota3 = signal<number>(0);

  // Función para calcular el promedio de las 3 notas
  promedio(): number {
    return (this.nota1() + this.nota2() + this.nota3()) / 3;
  }
}
