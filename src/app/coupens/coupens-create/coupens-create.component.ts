import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-coupens-create',
    imports: [],
    templateUrl: './coupens-create.component.html',
    styleUrl: './coupens-create.component.scss'
})
export class CoupensCreateComponent {
  pokemonService = inject(ApiService);
  ngOnInit() {
    this.pokemonService.getPikachu();
  }
}
