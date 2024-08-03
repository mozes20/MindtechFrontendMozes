import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PokemonService } from '../pokemon.service';
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  templateUrl: './pokemon.component.html',
  imports: [
    UpperCasePipe,
    NgForOf,
    NgIf
  ],
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonName: string | null = null;
  pokemonDetails: any = null;
  router = inject(Router)
  caught: boolean = false;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    if (this.pokemonName) {
      this.loading = true;
      this.pokemonService.getPokemonDetails(this.pokemonName).subscribe((pokemon: any) => {
        this.pokemonDetails = pokemon;
        this.loading = false;
      });
      this.pokemonService.isPokemonCaught(this.pokemonName).subscribe((response: any) => {
        this.loading = true;
        this.caught = response.caught;
        this.loading = false;
      });
    }

  }

  toggleCaught(): void {
    if (this.caught) {
      this.pokemonService.releasePokemon(this.pokemonName || '').subscribe(() => {
        this.caught = false;
        alert('Pokemon released!');
      });
    } else {
      this.pokemonService.catchPokemon(this.pokemonName || '').subscribe(() => {
        this.caught = true;
        alert('Pokemon caught!');
      });
    }
  }
}
