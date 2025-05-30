import { Component, input } from '@angular/core';
import { livros } from '../../mock-livros';
import { LivroComponent } from '../livro/livro.component';
import { GeneroLiterario } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {

  genero = input.required<GeneroLiterario>();
  
}
