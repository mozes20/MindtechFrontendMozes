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

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    if (this.pokemonName) {
      this.pokemonService.getPokemonDetails(this.pokemonName).subscribe((pokemon: any) => {
        this.pokemonDetails = pokemon;
      });
    }
  }
}
