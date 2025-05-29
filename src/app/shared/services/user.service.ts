import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Credentials, User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/api/users`;
const API_URL_AUTH = `${environment.apiURL}/api/auth`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);

  registerUser(user: User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user)
  }

  checkDuplicateEmail(email: string) {
    return this.http.get<{status: boolean, data: User}>(
      `${API_URL}/checkDuplicateEmail/${email}`
    )
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{status: boolean, data: string}>(`${API_URL_AUTH}/login`, credentials)
  }
}
