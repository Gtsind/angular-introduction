import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-registration',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService = inject(UserService);
  registrationStatus: {success: boolean, message: string} = {
    success: false,
    message: 'Not attempted yet'
  }

  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  },
    this.passwordConfirmValidator,
  )

  onSubmit() {
    // const data = this.myForm.value as User;
    const data: User = {
      'username': this.myForm.get('username')?.value || '',
      'password': this.myForm.get('password')?.value || '',
      'name': this.myForm.get('name')?.value || '',
      'surname': this.myForm.get('surname')?.value || '',
      'email': this.myForm.get('email')?.value || '',
      'address': {
        'area': this.myForm.get('area')?.value || '',
        'road': this.myForm.get('road')?.value || ''
      }
    }
    this.userService.registerUser(data)
      .subscribe({
        next: (response) => {
          console.log("User registered", response);
          this.registrationStatus = {
            success: true,
            message: "User Registered Successfully"}
        },
        error: (response) => {
          console.log("User not registered", response)
          this.registrationStatus = {
            success: false,
            message: response.data
          }
        }
      })
  }

  passwordConfirmValidator(control: AbstractControl): {[key:string]: boolean} | null {
    const form = control as FormGroup;
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if(password && confirmPassword && password!==confirmPassword) {
      form.get('confirmPassword')?.setErrors({passwordMismatch: true})
      return {passwordMismatch: true}
    }

    return null
  }

  checkDuplicateEmail() {
    const email = this.myForm.get('email')?.value;

    if (email) {
      this.userService.checkDuplicateEmail(email)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.myForm.get("email")?.setErrors(null)
          },
          error: (response) => {
            console.log(response);
            const message = response.data;
            console.log(message);
            this.myForm.get('email')?.setErrors({duplicateEmail: true})
          }
        })
    }
  }

  registerAnother() {
    this.myForm.reset();
    this.registrationStatus = {success: false, message: "Not attempted yet"}
  }
}
