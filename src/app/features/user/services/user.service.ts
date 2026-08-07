import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserListResponseDto } from '../dtos/user-list-response.dto';
import { ServiceResponse } from '../../shared/models/ServiceResponse';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = '/api/user';

  private readonly http = inject(HttpClient);

  findAll(): Observable<ServiceResponse<UserListResponseDto[]>> {
    console.log(this.API)
    return this.http.get<ServiceResponse<UserListResponseDto[]>>(`${this.API}`);
  }
}
