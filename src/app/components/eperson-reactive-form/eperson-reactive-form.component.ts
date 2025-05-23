import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from  '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>();

  myForm = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  })

  onSubmit(){
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    
      const person: EPerson = {
        givenName: this.myForm.value.givenName ?? '',
        surName: this.myForm.value.surName ?? '',
        age: String(this.myForm.value.age) ?? '',
        email: this.myForm.value.email ?? '',
        education: this.myForm.value.education ?? ''
      }
      this.person.emit(person);
      this.myForm.reset();
    }
  }

  onSetValue() {
    this.myForm.setValue({
      givenName: "Mark",
      surName: "S.",
      age: 39,
      email: "mark.s@lumon.com",
      education: "Master's Degree"
    })
  }
}
