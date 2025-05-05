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

  users: Person[] = [
    {
      "givenName": "Angelina",
      "surName": "Bengough",
      "email": "abengough0@va.gov",
      "age": 1,
      "address": "Room 1799"
    }, {
      "givenName": "Ginnie",
      "surName": "Spendley",
      "email": "gspendley1@wikia.com",
      "age": 2,
      "address": "PO Box 34565"
    }, {
      "givenName": "Nickola",
      "surName": "Medlin",
      "email": "nmedlin2@dedecms.com",
      "age": 3,
      "address": "13th Floor"
    }, {
      "givenName": "Burty",
      "surName": "Godlip",
      "email": "bgodlip3@dyndns.org",
      "age": 4,
      "address": "Suite 88"
    }, {
      "givenName": "Doralin",
      "surName": "Greenhalgh",
      "email": "dgreenhalgh4@goo.ne.jp",
      "age": 5,
      "address": "Suite 61"
    }, {
      "givenName": "Caz",
      "surName": "Dyball",
      "email": "cdyball5@ow.ly",
      "age": 6,
      "address": "Room 1409"
    }, {
      "givenName": "Rosamond",
      "surName": "Vero",
      "email": "rvero6@buzzfeed.com",
      "age": 7,
      "address": "Suite 26"
    }, {
      "givenName": "Clo",
      "surName": "Joannic",
      "email": "cjoannic7@qq.com",
      "age": 8,
      "address": "PO Box 40785"
    }, {
      "givenName": "Hadley",
      "surName": "Hannis",
      "email": "hhannis8@merriam-webster.com",
      "age": 9,
      "address": "Apt 382"
    }, {
      "givenName": "Christa",
      "surName": "Girdwood",
      "email": "cgirdwood9@php.net",
      "age": 10,
      "address": "Suite 59"
    }, {
      "givenName": "Adrienne",
      "surName": "Yashnov",
      "email": "ayashnova@wunderground.com",
      "age": 11,
      "address": "Suite 13"
    }, {
      "givenName": "Bradly",
      "surName": "Augur",
      "email": "baugurb@unc.edu",
      "age": 12,
      "address": "Room 842"
    }, {
      "givenName": "Baldwin",
      "surName": "Molohan",
      "email": "bmolohanc@artisteer.com",
      "age": 13,
      "address": "Apt 582"
    }, {
      "givenName": "Benjamen",
      "surName": "Bilton",
      "email": "bbiltond@youku.com",
      "age": 14,
      "address": "PO Box 99781"
    }, {
      "givenName": "Lorie",
      "surName": "Heddy",
      "email": "lheddye@nba.com",
      "age": 15,
      "address": "Suite 4"
    }, {
      "givenName": "Minor",
      "surName": "Sturzaker",
      "email": "msturzakerf@amazon.co.uk",
      "age": 16,
      "address": "PO Box 30304"
    }, {
      "givenName": "Aveline",
      "surName": "Learmont",
      "email": "alearmontg@indiatimes.com",
      "age": 17,
      "address": "Suite 76"
    }, {
      "givenName": "Celina",
      "surName": "Longwood",
      "email": "clongwoodh@ask.com",
      "age": 18,
      "address": "Apt 249"
    }, {
      "givenName": "Brandie",
      "surName": "Ely",
      "email": "belyi@tuttocitta.it",
      "age": 19,
      "address": "Suite 99"
    }, {
      "givenName": "Crissy",
      "surName": "Bloxsum",
      "email": "cbloxsumj@wix.com",
      "age": 20,
      "address": "PO Box 4428"
    }
  ]
}
