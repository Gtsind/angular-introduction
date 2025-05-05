import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
 
@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | undefined; //declares an input property in an Angular component that can receive a Person object from its parent component,
                                            // or be undefined  if no data is provided.

  name = "Marilena"
  person = {
    givenName: "Marilena",
    surName: "Veniamaki",
    age: 35,
    email: "benjamaki@gmail.com"
  }
}
