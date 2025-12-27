import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';

// este decordaor transforma una clase en un componente

@Component({
  selector: 'app-root', // selector es el nombre del componenten (etiqueta html)
  imports: [RouterOutlet, Navbar], // imports son los imports del componente (componentes, directivas, pipes, etc.)
  templateUrl: './app.html', // templateUrl es el template del componente
  styleUrl: './app.css', // styleUrl es el estilo del componente
})
export class App {
  protected readonly title = signal('bases');
}
