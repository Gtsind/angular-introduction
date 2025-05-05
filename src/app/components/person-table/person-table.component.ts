import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "Marilena"
  person = {
    givenName: "Marilena",
    surName: "Veniamaki",
    age: 35,
    email: "benjamaki@gmail.com"
  }
}
