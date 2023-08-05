import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',  // donne un nom au composant pour l'identifier par la suite par la balise <app-root>
  templateUrl: './app.component.html', // cela pourrait plus être template: `<h1>Welcome to {{title}} !</h1>`
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
   // il est importé dans le fichier app.module.ts
   // => import { AppComponent } from './app.component';

   constructor(
    private router: Router
  ) {}

   goToPokemonsList() {
    this.router.navigate(['/pokemons']);
  }

}
