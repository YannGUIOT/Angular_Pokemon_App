import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  types: string[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType() {

  }

  selectType() {

  }

  onSubmit() {

  }
}
