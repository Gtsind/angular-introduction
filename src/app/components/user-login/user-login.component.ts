import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.form.value);
    const credentials = this.form.value as Credentials;
    
    this.userService.loginUser(credentials)
      .subscribe({
        next: (response) => {
          console.log("Logged in",response)
          const accessToken = response.data;
          localStorage.setItem('access_token', accessToken);

          const decodedTokenSubject = jwtDecode(accessToken) as unknown as LoggedInUser
          console.log(decodedTokenSubject);

          this.userService.user$.set({
            username: decodedTokenSubject.username,
            email: decodedTokenSubject.email,
            roles: decodedTokenSubject.roles
          })

          this.router.navigate(['welcome']);

        },
        error: (error) => {
          console.log("Failed to log in", error)
        }
      })
  }
}
