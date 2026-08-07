import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserListResponseDto } from '../../dtos/user-list-response.dto';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'user-list-page',
  templateUrl: 'user-list.page.html'
})
export class UserListPage {
  private readonly userservice = inject(UserService);

  users = toSignal(this.userservice.findAll().pipe(
    map((response) => response.data)), {
    initialValue: [] as UserListResponseDto[],
  });
}
