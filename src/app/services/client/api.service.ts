import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../features/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //https://reqres.in/
  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<User>> {
    return this.http.get<{ data: User[] }>(`${this.baseUrl}/users`)
      .pipe(map((users) => users.data || []));
  }
}
