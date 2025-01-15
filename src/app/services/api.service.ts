import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPikachu() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
