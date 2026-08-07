import { Observable } from 'rxjs/internal/Observable';
import { AdresseListResponseDto } from '../dtos/adresse-list-response.dto';
import { ServiceResponse } from '../../shared/models/ServiceResponse';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdresseService {
  private readonly API = '/api/adresse';

  private readonly http = inject(HttpClient);

  findAll(): Observable<ServiceResponse<AdresseListResponseDto[]>> {
    return this.http.get<ServiceResponse<AdresseListResponseDto[]>>(`${this.API}`);
  }
}
