import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/services/auth.service';
import { NgForOf, NgIf } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: string[] = [];
  filteredItems: string[] = [];
  dropdownOptions: string[] = [];
  searchQuery: string = '';
  loading: boolean = true;

  constructor(protected authService: AuthService, private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService.getAllTypes().subscribe((types: any) => {
      types.results.map((type: any) => this.dropdownOptions.push(type.name));
    });
    this.pokemonService.getPokemonByType('normal').subscribe((pokemons: any) => {
      this.items = pokemons.map((pokemon: any) => pokemon.pokemon.name);
      this.filteredItems = [...this.items];
      this.loading = false;
    });
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    this.filterItems();
  }

  onDropdownChange(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    this.loading = true;
    this.pokemonService.getPokemonByType(selectedOption).subscribe((pokemons: any) => {
      this.items = pokemons.map((pokemon: any) => pokemon.pokemon.name);
      this.filterItems();
      this.loading = false;
    });
    console.log('Selected option:', selectedOption);
  }

  onSearchChange() {
    this.filterItems();
  }

  filterItems() {
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  getPokemonsByType(type: string) {
    console.log(type);
  }

  navigateToDetail(pokemonName: string) {
    this.router.navigate(['/pokemon', pokemonName]);
  }
}
