import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {

  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router) {}

  search(term: string) {

  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
