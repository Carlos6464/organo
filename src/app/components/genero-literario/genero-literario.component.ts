import { Component } from '@angular/core';
import { livros } from '../../mock-livros';
import { LivroComponent } from '../livro/livro.component';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  livro = livros[0]
}
