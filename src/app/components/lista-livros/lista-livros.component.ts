import { Component } from '@angular/core';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent {

}
