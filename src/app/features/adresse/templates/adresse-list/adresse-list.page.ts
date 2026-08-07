import { map } from 'rxjs/operators';
import { AdresseService } from '../../services/AdresseService';
import { AdresseListResponseDto } from '../../dtos/adresse-list-response.dto';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'adresse-list',
  templateUrl: './adresse-list.page.html',
})
export class AdresseListPage {
  private readonly adresseservice = inject(AdresseService);

  adresses = toSignal(this.adresseservice.findAll().pipe(
    map((response) => response.data)),{
    initialValue: [] as AdresseListResponseDto[],
  });
}
