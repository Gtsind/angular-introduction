import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<EPerson>();
  @ViewChild('eForm', {static: false}) form: NgForm | undefined;


  onSubmit(value: EPerson) {
    console.log(value);
    this.person.emit(value);
  }

  onSetValue() {
    this.form?.setValue({
      givenName: "Mark",
      surName: "S.",
      age: 35,
      email:"mark.s@lumon.com",
      education:"Master's Degree"
    })
  }
}
