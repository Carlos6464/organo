import { Component } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FooterComponent } from './components/footer/footer.component';
import { LivroComponent } from './components/livro/livro.component';
@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, FooterComponent, LivroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
