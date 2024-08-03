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
}
