import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = `George`;
  
  //Step 1 : One way data binding
  person = {
    givenName: `George`,
    surName: `Tsindaris`,
    age: 38,
    email: `tsindarisg@gmail.com`
  }

  //Step 3 : Component Input
  person0: Person = {
    givenName: "John",
    surName: "Rambo",
    age: 40,
    email: "rambo@gmail.com",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "Sylvester",
    surName: "Stalone",
    age: 65,
    email: "stalone@gmail.com",
    address: "New York, USA"
  }
}
