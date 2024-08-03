import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private apiService: ApiService) {
  }

  getAllTypes() {
    return this.apiService.get('pokemon/types');
  }

  getPokemonByType(type: string) {
    return this.apiService.get(`pokemon/type/${type}`);
  }

  getPokemonDetails(name: string) {
    return this.apiService.get(`pokemon/${name}`);
  }

  getPokemonImage(name: string) {
    return this.apiService.get(`pokemon/image/${name}`);
  }

  catchPokemon(name: string) {
    return this.apiService.post(`pokemon/catch/${name}`, {});
  }

  releasePokemon(name: string) {
    return this.apiService.delete(`pokemon/release/${name}`);
  }

  isPokemonCaught(name: string) {
    return this.apiService.get(`pokemon/caught/${name}`);
  }
}
