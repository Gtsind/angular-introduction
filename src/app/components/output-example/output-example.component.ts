import { Component, inject, Inject } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/eperson';
import { SimpleDatatableComponent } from 'src/app/components/simple-datatable/simple-datatable.component';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule
} from '@angular/cdk/dialog';

@Component({
  selector: 'app-output-example',
  imports: [SimpleDatatableComponent,DialogModule],
  templateUrl: './output-example.component.html',
  styleUrl: './output-example.component.css'
})
export class OutputExampleComponent {
  manyPerson = ManyPerson;
  dialog = inject(Dialog);

  showPersonClicked(person: EPerson) {
    console.log("Component Output:", person);
    this.dialog.open(PersonDialogComponent, {
      data: person
    })
  }

}

@Component({
  imports: [],
  template: `
  <table class="table table-bordered w-50">
    <caption>Person Details</caption>
    <tr>
      <td class="fw-semibold text-end">First Name</td>
      <td class="ps-2">{{person.givenName}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Last Name</td>
      <td class="ps-2">{{person.surName}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Age</td>
      <td class="ps-2">{{person.age}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Email</td>
      <td class="ps-2">{{person.email}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Education</td>
      <td class="ps-2">{{person.education}}</td>
    </tr>
  </table>
  <button class=" btn btn-primary btn-lg" (click)= "dialogRef.close()">Close
  </button>
  `,
  styles: [
    `
    :host {
      display: block;
      background: #fff;
      border-radius: 8px;
      padding: 16px;
      max-width: 500px;
    }
    `
  ]
})

export class PersonDialogComponent {
  dialogRef = inject(DialogRef);
  constructor(
    @Inject(DIALOG_DATA) public person: EPerson
  ){}
}
